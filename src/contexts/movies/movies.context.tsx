'use client';

import { MovieList } from '@/types/movie';
import { ReactNode, createContext, useState } from 'react';

type MoviesContextProps = {
  moviesLiked: MovieList[] | [];
  handleLikeMovie: (movie: MovieList) => void;
};

export const MoviesContext = createContext<MoviesContextProps>(
  {} as MoviesContextProps
);

export function MoviesProvider({ children }: { children: ReactNode }) {
  const [moviesLiked, setMoviesLiked] = useState<MovieList[] | []>([]);

  function handleLikeMovie(movie: MovieList) {
    const hasExistsLikedMovie = !!moviesLiked.find(
      (liked) => liked.id === movie.id
    );

    if (hasExistsLikedMovie) {
      return setMoviesLiked(
        moviesLiked.filter((liked) => liked.id !== movie.id)
      );
    }

    setMoviesLiked([...moviesLiked, movie]);
  }

  return (
    <MoviesContext.Provider
      value={{
        moviesLiked,
        handleLikeMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
