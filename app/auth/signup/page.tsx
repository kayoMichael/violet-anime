'use client';

import React from 'react';

import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { type authMessage, signUp } from '@/app/server/auth/authActions';
import { SubmitButton } from '@/components/button/submitButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export default function SignupForm() {
  const statusState: authMessage = {
    status: 'stale',
    firstName: [],
    lastName: [],
    email: [],
    password: [],
    confirmPassword: [],
  } as const;
  const [state, formAction] = useFormState(signUp, statusState);
  return (
    <>
      <Image
        alt='background'
        className='absolute -z-10 object-cover w-full h-screen'
        height={1000}
        priority={true}
        src='/background/background-2.jpg'
        width={1000}
      />
      <div className='flex justify-center items-center pt-14'>
        <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
          <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
            Welcome to <span className='text-green-600'>Violet Anime</span>
          </h2>
          <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
            Already have an account?{' '}
            <Link className='hover:underline' href='/auth/signin'>
              Sign in
            </Link>
          </p>
          <form action={formAction} className='my-8'>
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
              <LabelInputContainer>
                <Label htmlFor='firstName'>First name</Label>
                <Input
                  id='firstName'
                  name='firstName'
                  onChange={() => {
                    state.firstName = [];
                    state.lastName = [];
                  }}
                  placeholder='Violet'
                  type='text'
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor='lastname'>Last name</Label>
                <Input
                  id='lastname'
                  name='lastName'
                  placeholder='Evergarden'
                  type='text'
                />
              </LabelInputContainer>
            </div>
            {(state.lastName.length !== 0 || state.firstName.length !== 0) && (
              <p className='text-red-400 text-sm'>
                First Name and Last Name is Required
              </p>
            )}
            <LabelInputContainer className='mt-4'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                name='email'
                placeholder='Leidenschaftlich@Leiden.com'
                type='email'
              />
            </LabelInputContainer>
            {state.email.length !== 0 && (
              <p className='text-red-400 text-sm'>{state.email}</p>
            )}
            <LabelInputContainer className='mt-4'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                name='password'
                placeholder='••••••••'
                type='password'
              />
            </LabelInputContainer>
            {state.password.length !== 0 && (
              <p className='text-red-400 text-sm'>{state.password}</p>
            )}
            <LabelInputContainer className='mt-4'>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <Input
                id='confirmPassword'
                name='confirmPassword'
                placeholder='••••••••'
                type='password'
              />
            </LabelInputContainer>
            {state.confirmPassword.length !== 0 && (
              <p className='text-red-400 text-sm'>{state.confirmPassword}</p>
            )}
            <SubmitButton
              className='mt-8 bg-gradient-to-br relative group/btn from-green-400 dark:from-zinc-900 dark:to-zinc-900 to-green-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
              type='submit'
            >
              Sign up &rarr;
              <BottomGradient />
            </SubmitButton>

            <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

            <div className='flex flex-col space-y-4'>
              <button
                className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
                type='submit'
              >
                <IconBrandGithub className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
                <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
                type='submit'
              >
                <IconBrandGoogle className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
                <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
