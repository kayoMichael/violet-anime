'use server';

import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export interface signInMessage {
  status: 'error' | 'success' | 'stale';
  error: string | null;
}

const signInAuthMessage: signInMessage = {
  status: 'success',
  error: null,
};

export const signIn = async (_: signInMessage, formData: FormData) => {
  const signInInfo = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const email = signInInfo.email as string;
  const password = signInInfo.password as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    signInAuthMessage.status = 'error';
    signInAuthMessage.error =
      'You have entered an invalid username or password';
    return signInAuthMessage;
  }

  redirect('/');
};

export interface authMessage {
  status: 'error' | 'success' | 'stale';
  firstName: string[];
  lastName: string[];
  email: string[];
  password: string[];
  confirmPassword: string[];
}

const message: authMessage = {
  status: 'success',
  firstName: [],
  lastName: [],
  email: [],
  password: [],
  confirmPassword: [],
};

const signUpSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required.'),
    lastName: z.string().min(1, 'Last Name is required.'),
    email: z.string().email('Please Provide a Valid Email Address.'),
    password: z.string().min(6, 'Password must be at least 6 characters.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const signUp = async (_: authMessage, formData: FormData) => {
  const signUpInfo = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const result = signUpSchema.safeParse(signUpInfo);
  if (!result.success) {
    const authError = result.error.flatten().fieldErrors;
    message.status = 'error';
    message.firstName = authError?.firstName ? authError.firstName : [];
    message.lastName = authError?.lastName ? authError.lastName : [];
    message.email = authError?.email ? authError.email : [];
    message.password = authError?.password ? authError.password : [];
    message.confirmPassword = authError?.confirmPassword
      ? authError.confirmPassword
      : [];
    return message;
  }

  const origin = headers().get('origin');
  const email = signUpInfo.email as string;
  const password = signUpInfo.password as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
    message.status = 'error';
    message.email = ['Email already in use'];
    return message;
  }

  return redirect('/auth/signup/email-confirmation');
};
