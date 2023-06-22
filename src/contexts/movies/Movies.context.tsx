import { Movie } from '@/types/types';
import { ReactNode, createContext, useState } from 'react';

type MoviesContextProps = {
  moviesLiked: Movie[] | [];
  handleLikeMovies: (movie: Movie) => void;
};

export const MoviesContext = createContext<MoviesContextProps>(
  {} as MoviesContextProps
);

export function MoviesProvider({ children }: { children: ReactNode }) {
  const [moviesLiked, setMoviesLiked] = useState<Movie[] | []>([]);

  function handleLikeMovies(movie: Movie) {
    setMoviesLiked((previous) => [...previous, movie]);
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
