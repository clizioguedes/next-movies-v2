'use client';

import { MovieLgCard } from '@/components/contexts/Movies/MovieLgCard';
import { EmptyData } from '@/components/structure/EmptyData';
import { MoviesContext } from '@/contexts/movies/Movies.context';
import { useContext } from 'react';

export function FavoriteMoviesList() {
  const { moviesLiked } = useContext(MoviesContext);

  if (moviesLiked.length <= 0) {
    return <EmptyData />;
  }

  return (
    <main className="flex flex-col items-center gap-4 my-8">
      {moviesLiked?.map((movie) => {
        return <MovieLgCard key={movie.id} movie={movie} />;
      })}
    </main>
  );
}
