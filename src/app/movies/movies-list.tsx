'use client';

import { MovieSmCard } from '@/components/contexts/Movies/MovieSmCard';
import { HorizontalList } from '@/components/structure/HorizontalList';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from '@/services/requests/movies';
import { MovieList } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

export function MoviesList() {
  const { data: popularMovies } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: () => getPopularMovies(),
  });

  const { data: nowPlayingMovies } = useQuery({
    queryKey: ['nowPlayingMovies'],
    queryFn: () => getNowPlayingMovies(),
  });

  const { data: topRatedMovies } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: () => getTopRatedMovies(),
  });

  return (
    <main>
      <HorizontalList title="Filmes Populares">
        {popularMovies?.map((movie: MovieList) => {
          return <MovieSmCard key={movie.id} movie={movie} />;
        })}
      </HorizontalList>

      <HorizontalList title="Em Cartaz">
        {nowPlayingMovies?.map((movie: MovieList) => {
          return <MovieSmCard key={movie.id} movie={movie} />;
        })}
      </HorizontalList>

      <HorizontalList title="Melhores Avaliados">
        {topRatedMovies?.map((movie: MovieList) => {
          return <MovieSmCard key={movie.id} movie={movie} />;
        })}
      </HorizontalList>
    </main>
  );
}
