import { HeroParallax } from '@/components/ui/hero-parallax';
import { InfiniteMovingCards } from '@/components/ui/infinite-slider';
import { heroItems, infiniteMovingItems } from '@/utils';

export default async function Home() {
  return (
    <>
      <HeroParallax products={heroItems} />
      <div className='flex justify-center'>
        <InfiniteMovingCards
          className='w-full'
          direction='left'
          items={infiniteMovingItems}
          speed='slow'
        />
      </div>
    </>
  );
}
