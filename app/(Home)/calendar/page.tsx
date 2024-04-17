import React from 'react';

import Calendar from './calendar';

interface Anime {
  node: {
    title: string;
    start_date: string;
    end_date: string;
    synopsis: string;
    id: number;
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
    }
  ).then(async (res) => {
    return await res.json();
  });
  const animeEvents = anime.data.map((anime: Anime) => {
    return {
      title: anime.node.title,
      start: anime.node.start_date,
      description: anime.node.synopsis,
      end: anime.node.end_date,
      url: `https://myanimelist.net/anime/${anime.node.id}`,
      editable: false,
    };
  });

  return <Calendar animeEvents={animeEvents}></Calendar>;
};

export default CalendarPage;
