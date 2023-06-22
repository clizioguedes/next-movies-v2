import { moviesListMock } from '@/__mocks__/movies';
import { MovieSmCard } from '@/components/contexts/Movies/MovieSmCard';
import { MoviesContext } from '@/contexts/movies/Movies.context';
import { MovieList } from '@/types/types';

import { render, screen } from '@testing-library/react';

describe('MovieSmCard Component', () => {
  test('render component with favorite movies', () => {
    const titleMovieMock = moviesListMock[0].title;

    const moviesLikedMock = moviesListMock;

    render(
      <MoviesContext.Provider
        value={{
          moviesLiked: moviesLikedMock,
          handleLikeMovies: () => null,
        }}
      >
        <MovieSmCard movie={moviesListMock[0]} />
      </MoviesContext.Provider>
    );

    expect(screen.getByText(titleMovieMock)).toBeInTheDocument;
  });

  test('render component without favorite movies', () => {
    const titleMovieMock = moviesListMock[0].title;

    const moviesLikedMock = [] as MovieList[];

    render(
      <MoviesContext.Provider
        value={{
          moviesLiked: moviesLikedMock,
          handleLikeMovies: () => null,
        }}
      >
        <MovieSmCard movie={moviesListMock[0]} />
      </MoviesContext.Provider>
    );

    expect(screen.getByText(titleMovieMock)).toBeInTheDocument;
  });
});
