import { ENDPOINTS } from '@/constants/endpoints';
import instance from '@/services/api';
import { Movie } from '@/types/types';

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await instance
    .get(ENDPOINTS.GET_POPULAR_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as Movie[];

  return data;
}

export async function getNowPlayingMovies(): Promise<Movie[]> {
  const response = await instance
    .get(ENDPOINTS.GET_NOW_PLAYING_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as Movie[];

  return data;
}

export async function getUpcomingMovies(): Promise<Movie[]> {
  const response = await instance
    .get(ENDPOINTS.GET_UPCOMING_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as Movie[];

  return data;
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const response = await instance
    .get(ENDPOINTS.GET_TOP_RATED_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as Movie[];

  return data;
}
