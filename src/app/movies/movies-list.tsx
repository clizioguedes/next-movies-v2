'use client';

import { MovieSmallCard } from '@/components/contexts/Movies/MovieSmallCard';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/services/requests/movies';
import { Movie } from '@/types/types';
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

  const { data: upcomingMovies } = useQuery({
    queryKey: ['upcomingMovies'],
    queryFn: () => getUpcomingMovies(),
  });

  const { data: topRatedMovies } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: () => getTopRatedMovies(),
  });

  return (
    <main>
      <aside className="mx-10 overflow-x-scroll overflow-y-scroll">
        <h2 className="text-lg font-semibold text-gray-800 pt-2 break-words">
          Filmes Populares
        </h2>
        <div className="flex flex-row gap-4 overflow-scroll">
          {popularMovies?.map((movie: Movie) => {
            return <MovieSmallCard key={movie.id} movie={movie} />;
          })}
        </div>
      </aside>

      <aside className="mx-10 overflow-x-scroll overflow-y-scroll">
        <h2 className="text-lg font-semibold text-gray-800 pt-2 break-words">
          Em Cartaz
        </h2>
        <div className="flex flex-row gap-4 overflow-scroll">
          {nowPlayingMovies?.map((movie: Movie) => {
            return <MovieSmallCard key={movie.id} movie={movie} />;
          })}
        </div>
      </aside>

      <aside className="mx-10 overflow-x-scroll overflow-y-scroll">
        <h2 className="text-lg font-semibold text-gray-800 pt-2 break-words">
          Estreias
        </h2>
        <div className="flex flex-row gap-4 overflow-scroll">
          {upcomingMovies?.map((movie: Movie) => {
            return <MovieSmallCard key={movie.id} movie={movie} />;
          })}
        </div>
      </aside>

      <aside className="mx-10 overflow-x-scroll overflow-y-scroll">
        <h2 className="text-lg font-semibold text-gray-800 pt-2 break-words">
          Melhores Avaliados
        </h2>
        <div className="flex flex-row gap-4 overflow-scroll">
          {topRatedMovies?.map((movie: Movie) => {
            return <MovieSmallCard key={movie.id} movie={movie} />;
          })}
        </div>
      </aside>
    </main>
  );
}
