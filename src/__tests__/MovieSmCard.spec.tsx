import { moviesListMock } from '@/__mocks__/movies';
import { MovieSmCard } from '@/components/contexts/movies/MovieSmCard';
import { MoviesContext } from '@/contexts/movies/movies.context';
import { MovieList } from '@/types/types';
import { fireEvent, render, screen } from '@testing-library/react';

const moviesLiked = [] as MovieList[];

const handleLikeMovies = jest.fn();

test('renders movie card correctly', () => {
  render(
    <MoviesContext.Provider value={{ moviesLiked, handleLikeMovies }}>
      <MovieSmCard movie={moviesListMock[0]} />
    </MoviesContext.Provider>
  );

  const movieTitle = screen.getByText(moviesListMock[0].title);
  expect(movieTitle).toBeInTheDocument;

  const likeButton = screen.getByText(/Curtir/i);
  expect(likeButton).toBeInTheDocument;

  fireEvent.click(likeButton);

  expect(handleLikeMovies).toHaveBeenCalledWith([
    ...moviesLiked,
    { ...moviesListMock[0] },
  ]);
});
