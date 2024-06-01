import React from 'react';

import Calendar from './calendar';

interface Anime {
  node: {
    title: string;
    start_date: string;
    end_date: string;
    synopsis: string;
    id: number;
    num_episodes?: number;
  };
}

const CalendarPage = async () => {
  const clientId = process.env.MAL_API_KEY;

  if (!clientId) {
    throw new Error('MAL_API_KEY is not defined');
  }

  const anime = await fetch(
    'https://api.myanimelist.net/v2/anime/season/2024/spring?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics&limit=100',
    {
      headers: {
        'X-MAL-CLIENT-ID': clientId,
      },
      cache: 'no-store',
    }
  ).then(async (res) => {
    return await res.json();
  });
  const animeEvents = anime.data.map((anime: Anime) => {
    const episodes = anime.node.num_episodes ?? 12;
    const startDate = new Date(anime.node.start_date);
    return Array.from({ length: episodes }, (_, i) => {
      const eventDate = new Date(startDate);
      eventDate.setDate(startDate.getDate() + i * 7);
      return {
        title: anime.node.title,
        start: eventDate.toISOString().split('T')[0],
        description: anime.node.synopsis,
        end: eventDate.toISOString().split('T')[0],
        url: `https://myanimelist.net/anime/${anime.node.id}`,
        editable: false,
      };
    });
  });

  return <Calendar animeEvents={animeEvents.flat()}></Calendar>;
};

export default CalendarPage;
