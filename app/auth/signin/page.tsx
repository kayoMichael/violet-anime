'use client';

import { signIn, type signInMessage } from '@/app/server/auth/authActions';
import { SubmitButton } from '@/components/button/submitButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useFormState } from 'react-dom';

export default function SignInForm() {
  const statusState: signInMessage = {
    status: 'success',
    error: null,
  } as const;
  const [state, formAction] = useFormState(signIn, statusState);
  return (
    <>
      <Image
        src='/background/background.jpg'
        alt='background'
        className='absolute -z-10 object-cover w-full h-screen'
        height={1000}
        width={1000}
        priority={true}
      />
      <div className='flex justify-center items-center pt-32'>
        <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
          <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
            Welcome Back to <span className='text-green-600'>Violet Anime</span>
          </h2>
          <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
            Don&apos;t have an account?{' '}
            <Link href='/auth/signup' className='hover:underline'>
              Sign Up
            </Link>
          </p>
          <form className='my-8' action={formAction}>
            <LabelInputContainer className='mb-4'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                placeholder='Leidenschaftlich@Leiden.com'
                type='email'
                name='email'
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                placeholder='••••••••'
                type='password'
                name='password'
              />
            </LabelInputContainer>
            {state.status === 'error' && (
              <p className='text-red-400 text-sm'>{state.error}</p>
            )}
            <SubmitButton
              className='mt-4 bg-gradient-to-br relative group/btn from-green-400 dark:from-zinc-900 dark:to-zinc-900 to-green-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
              type='submit'
            >
              Log In &rarr;
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
