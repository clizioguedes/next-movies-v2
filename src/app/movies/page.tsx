import { MoviesList } from '@/app/movies/movies-list';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from '@/services/requests/movies';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { dehydrate } from '@tanstack/react-query';

export default async function Movies() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(['popularMovies'], getPopularMovies);
  await queryClient.prefetchQuery(['nowPlayingMovies'], getNowPlayingMovies);
  await queryClient.prefetchQuery(['topRatedMovies'], getTopRatedMovies);

  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <MoviesList />;
    </Hydrate>
  );
}
