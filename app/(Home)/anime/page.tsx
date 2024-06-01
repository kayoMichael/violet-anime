import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { seasonDateMap } from '@/utils';
import { Seasons } from '@/utils/seasonCycle';

const AnimaPage = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const animeSeason = seasonDateMap[parseInt(month)];

  const seasons = new Seasons();

  const nextYear =
    parseInt(month) + 3 > 12 ? today.getFullYear() + 1 : today.getFullYear();
  const previousYear =
    parseInt(month) - 3 < 1 ? today.getFullYear() - 1 : today.getFullYear();

  return (
    <div className='mx-10 my-10'>
      <h1 className='text-3xl'>Season Anime</h1>
      <Tabs className='w-[400px] mt-10' defaultValue='current season'>
        <TabsList>
          <TabsTrigger value='previous season'>
            {seasons.getPreviousSeason(animeSeason)} {previousYear}
          </TabsTrigger>
          <TabsTrigger value='current season'>
            {animeSeason} {today.getFullYear()}
          </TabsTrigger>
          <TabsTrigger value='next season'>
            {seasons.getNextSeason(animeSeason)} {nextYear}
          </TabsTrigger>
          <TabsTrigger value='Later Seasons'>Later Season</TabsTrigger>
        </TabsList>
        <TabsContent value='current season'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default AnimaPage;
