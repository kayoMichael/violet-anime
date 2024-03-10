import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const carouselItems = [
  {
    image: '/carousel/carousel-1.jpg',
    description: 'Random Fighter Anime (Random Fighter Anime)',
  },
  {
    image: '/carousel/carousel-2.png',
    description: 'Violet Evergarden (Violet Evergarden)',
  },
  {
    image: '/carousel/carousel-3.jpg',
    description: 'Kiryuin Satsuki (Kill la Kill)',
  },
  {
    image: '/carousel/carousel-4.jpg',
    description: 'Genos (One Punch Man)',
  },
  {
    image: '/carousel/carousel-5.jpg',
    description: 'Mereoleona Vermillion (Black Clover)',
  },
  {
    image: '/carousel/carousel-6.jpg',
    description: 'Escanor (Seven Deadly Sins)',
  },
];

const EmailConfirmation = ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  if (!searchParams?.email) {
    redirect('/auth/signup');
  }
  return (
    <div className='flex flex-col items-center mt-10 gap-5'>
      <Carousel className='w-full max-w-lg'>
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item.image}
                alt='background'
                height={500}
                width={500}
                className='flex aspect-square items-center justify-center p-6'
              ></Image>
              <Label className='flex justify-center text-neutral-800 dark:text-neutral-200 mb-2'>
                {item.description}
              </Label>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='flex items-center flex-col'>
        <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
          Email Confirmation Sent!
        </h2>
        <p>
          A confirmation email has been sent to {searchParams?.email}. Please
          confirm your email to continue.
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmation;
