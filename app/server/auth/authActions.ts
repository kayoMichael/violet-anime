'use server';

import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const signIn = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect('/login?message=Could not authenticate user');
  }

  return redirect('/');
};

export const signUp = async (formData: FormData) => {
  const origin = headers().get('origin');
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
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
    return redirect('/login?message=Could not authenticate user');
  }

  return redirect('/auth/signup/email-confirmation');
};
