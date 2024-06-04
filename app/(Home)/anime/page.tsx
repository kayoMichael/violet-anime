import React from 'react';

import CardGrid from './cardGrid';

import type { AnimeList } from './cardGrid';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { seasonDateMap } from '@/utils';
import { Seasons } from '@/utils/seasonCycle';

const AnimaPage = async () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const animeSeason = seasonDateMap[parseInt(month)];
  const clientId = process.env.MAL_API_KEY;

  if (!clientId) {
    throw new Error('MAL_API_KEY is not defined');
  }

  const seasons = new Seasons();

  const nextYear =
    parseInt(month) + 3 > 12 ? today.getFullYear() + 1 : today.getFullYear();
  const previousYear =
    parseInt(month) - 3 < 1 ? today.getFullYear() - 1 : today.getFullYear();

  let allAnimeSeason: Array<{ data: Array<{ node: AnimeList }> }> = [];
  try {
    const urls = [
      `https://api.myanimelist.net/v2/anime/season/${previousYear}/${seasons.getPreviousSeason(animeSeason)}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics&limit=500`,
      `https://api.myanimelist.net/v2/anime/season/${today.getFullYear()}/${animeSeason}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics&limit=500`,
      `https://api.myanimelist.net/v2/anime/season/${nextYear}/${seasons.getNextSeason(animeSeason)}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics&limit=500`,
    ];
    allAnimeSeason = await Promise.all(
      urls.map(
        async (url) =>
          await fetch(url, {
            headers: {
              'X-MAL-CLIENT-ID': clientId,
            },
          }).then(async (res) => {
            return await res.json();
          })
      )
    );
  } catch (error) {
    console.error(error);
  }
  return (
    <div className='mx-10 my-10'>
      <h1 className='text-3xl'>Season Anime</h1>
      <Tabs className='w-full h-auto mt-10' defaultValue='current season'>
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
        <TabsContent value='previous season'>
          <CardGrid animeList={allAnimeSeason[0].data} />
        </TabsContent>
        <TabsContent value='current season'>
          <CardGrid animeList={allAnimeSeason[1].data} />
        </TabsContent>
        <TabsContent value='next season'>
          <CardGrid animeList={allAnimeSeason[2].data} />
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default AnimaPage;
