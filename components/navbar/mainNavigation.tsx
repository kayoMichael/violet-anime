'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '../ui/button';

const MainNavigation = () => {
  const pathname = usePathname();
  return (
    <header className='flex items-center h-16 px-4 border-b dark:border-gray-800'>
      <nav className='flex-1 flex gap-4 items-center'>
        <Button variant='ghost'>
          <h1 className='text-xl text-primary font-bold'>Violet Anime</h1>
        </Button>
        <Link
          className={
            pathname !== '/dashboard'
              ? 'text-gray-500 hover:text-primary'
              : 'text-primary'
          }
          href='/dashboard'
        >
          Dashboard
        </Link>
        <Link
          className={
            pathname !== '/calendar'
              ? 'text-gray-500 hover:text-primary'
              : 'text-primary'
          }
          href='/calendar'
        >
          Calendar
        </Link>
        <Link
          className={
            pathname !== '/favourites'
              ? 'text-gray-500 hover:text-primary'
              : 'text-primary'
          }
          href='/favourites'
        >
          Favourites
        </Link>
        <Link
          className={
            pathname !== '/anime'
              ? 'text-gray-500 hover:text-primary'
              : 'text-primary'
          }
          href='/anime'
        >
          Season Anime
        </Link>
      </nav>
    </header>
  );
};

export default MainNavigation;
