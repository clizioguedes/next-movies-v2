import { moviesListMock } from '@/__mocks__/movies';
import { MovieSmCard } from '@/components/contexts/movies/MovieSmCard';
import { MoviesContext } from '@/contexts/movies/movies.context';

import { render, screen } from '@testing-library/react';

describe('Movie Large Card Component', () => {
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
});
