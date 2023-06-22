import { ENDPOINTS } from '@/constants/endpoints';
import instance from '@/services/api';
import { Movie, MovieList } from '@/types/types';

export async function getPopularMovies(): Promise<MovieList[]> {
  const data = await instance
    .get(ENDPOINTS.GET_POPULAR_MOVIES)
    .then((response) => response.data.results);

  return data;
}

export async function getNowPlayingMovies(): Promise<MovieList[]> {
  const data = await instance
    .get(ENDPOINTS.GET_NOW_PLAYING_MOVIES)
    .then((response) => response.data.results);

  return data;
}

export async function getTopRatedMovies(): Promise<MovieList[]> {
  const data = await instance
    .get(ENDPOINTS.GET_TOP_RATED_MOVIES)
    .then((response) => response.data.results);

  return data;
}

export async function getMovieDetails(id: string): Promise<Movie> {
  const data = await instance
    .get(ENDPOINTS.GET_MOVIE_DETAILS.replace(':movie_id', id))
    .then((response) => response.data);

  return data;
}
