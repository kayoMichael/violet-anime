'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import { DirectionAwareHover } from './directional-aware-hover';
import { StarFilledIcon } from '@radix-ui/react-icons';

export type Card = {
  id: number;
  title: string;
  picture: string;
  content: JSX.Element | React.ReactNode | string;
  rank: number;
  mean: number;
  popularity: number;
  className: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className='w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 relative'>
      {cards.map((card, i) => (
        <div key={i} className='w-[250px] h-[350px]'>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'rounded-lg cursor-pointer fixed inset-0 h-[600px] w-full md:w-1/2 m-auto z-50  top-0 flex-wrap flex-col overflow-scroll'
                : lastSelected?.id === card.id
                  ? 'z-40 bg-white rounded-xl h-full w-full'
                  : 'bg-white rounded-xl h-full w-full'
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <DirectionAwareHover
      imageUrl={card.picture}
      className={cn(
        'object-top absolute inset-0 transition duration-200',
        loaded ? 'blur-none' : 'blur-md'
      )}
      setLoaded={setLoaded}
    >
      <p className='font-bold text-xl'>{card.title}</p>
      <div className='font-normal text-sm'>
        <div className={cn('flex items-center', !card.mean ? 'hidden' : '')}>
          <StarFilledIcon color='yellow' />
          {card.mean}
        </div>
      </div>
    </DirectionAwareHover>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className='bg-slate-200 h-full w-full rounded-lg relative z-[60]'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className='absolute inset-0 h-full w-full'
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className='bg-slate-200'
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
