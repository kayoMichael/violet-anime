'use client';

import { signUp } from '@/app/server/auth/authActions';
import { SubmitButton } from '@/components/button/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import React from 'react';

export default function SignupFormDemo() {
  return (
    <div className='flex justify-center items-center mt-14'>
      <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
        <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
          Welcome to Violet Anime
        </h2>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Sign up to get started
        </p>
        <form className='my-8' action={signUp}>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
            <LabelInputContainer>
              <Label htmlFor='firstName'>First name</Label>
              <Input
                id='firstName'
                placeholder='Violet'
                type='text'
                name='firstName'
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor='lastname'>Last name</Label>
              <Input
                id='lastname'
                placeholder='Evergarden'
                type='text'
                name='lastName'
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              placeholder='example@outlook.com'
              type='email'
              name='email'
            />
          </LabelInputContainer>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='••••••••'
              type='password'
              name='password'
            />
          </LabelInputContainer>
          <LabelInputContainer className='mb-8'>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input
              id='confirmPassword'
              placeholder='••••••••'
              type='password'
              name='confirmPassword'
            />
          </LabelInputContainer>

          <SubmitButton
            className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
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
