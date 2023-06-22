import { ENDPOINTS } from '@/constants/endpoints';
import instance from '@/services/api';
import { Movie, MovieList } from '@/types/types';

export async function getPopularMovies(): Promise<MovieList[]> {
  const response = await instance
    .get(ENDPOINTS.GET_POPULAR_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as MovieList[];

  return data;
}

export async function getNowPlayingMovies(): Promise<MovieList[]> {
  const response = await instance
    .get(ENDPOINTS.GET_NOW_PLAYING_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as MovieList[];

  return data;
}

export async function getUpcomingMovies(): Promise<MovieList[]> {
  const response = await instance
    .get(ENDPOINTS.GET_UPCOMING_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as MovieList[];

  return data;
}

export async function getTopRatedMovies(): Promise<MovieList[]> {
  const response = await instance
    .get(ENDPOINTS.GET_TOP_RATED_MOVIES)
    .then((response) => response.data.results);

  const data = (await response) as MovieList[];

  return data;
}

export async function getMovieDetails(): Promise<Movie> {
  const response = await instance
    .get(ENDPOINTS.GET_MOVIE_DETAILS)
    .then((response) => {
      console.log('response.data.results', response.data);

      return response.data;
    });

  return response;
}
