import React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LayoutGrid } from '@/components/ui/layout-grid';

export interface AnimeList {
  id: number;
  title: string;
  synopsis: string;
  rank: number;
  mean: number;
  popularity: number;
  main_picture: {
    large: string;
  };
  className: string;
}

const SkeletonOne = (content: string, title: string) => {
  return (
    <Card className='h-[500px] w-full'>
      <CardHeader>
        <p className='font-bold text-4xl text-black'>{title}</p>
      </CardHeader>
      <CardContent>
        <p className='font-normal text-base my-4 max-w-lg text-black'>
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

const CardGrid = ({ animeList }: { animeList: Array<{ node: AnimeList }> }) => {
  const gridContent = animeList.map((anime) => {
    return {
      id: anime.node.id,
      title: anime.node.title,
      picture: anime.node.main_picture.large,
      content: SkeletonOne(anime.node.synopsis, anime.node.title),
      rank: anime.node.rank,
      mean: anime.node.mean,
      popularity: anime.node.popularity,
      className: '',
    };
  });
  return (
    <div className='h-auto py-20'>
      <LayoutGrid cards={gridContent} />
    </div>
  );
};

export default CardGrid;
