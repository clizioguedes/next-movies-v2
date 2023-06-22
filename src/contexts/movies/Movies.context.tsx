'use client';

import { MovieList } from '@/types/types';
import { ReactNode, createContext, useState } from 'react';

type MoviesContextProps = {
  moviesLiked: MovieList[] | [];
  handleLikeMovies: (movie: MovieList[]) => void;
};

export const MoviesContext = createContext<MoviesContextProps>(
  {} as MoviesContextProps
);

export function MoviesProvider({ children }: { children: ReactNode }) {
  const [moviesLiked, setMoviesLiked] = useState<MovieList[] | []>([]);

  function handleLikeMovies(movies: MovieList[]) {
    setMoviesLiked(movies);
  }

  return (
    <MoviesContext.Provider
      value={{
        moviesLiked,
        handleLikeMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
