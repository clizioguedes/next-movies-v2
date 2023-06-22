'use client';

import { MoviesContext } from '@/contexts/movies/Movies.context';
import { useContext } from 'react';

export function FavoriteMoviesList() {
  const { moviesLiked } = useContext(MoviesContext);

  return (
    <main>
      {moviesLiked?.map((movie) => {
        return (
          <div key={movie.id}>
            <p>{movie.id}</p>
          </div>
        );
      })}
    </main>
  );
}
