import { ENDPOINTS } from '@/constants/endpoints';
import { MoviesContext } from '@/contexts/movies/Movies.context';
import { MovieList } from '@/types/types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

type MovieSmCardProps = {
  movie: MovieList;
};

export function MovieSmCard({ movie }: MovieSmCardProps) {
  const { moviesLiked, handleLikeMovies } = useContext(MoviesContext);

  const [movieLiked, setMovieLiked] = useState(
    moviesLiked.length && !!moviesLiked.find((liked) => liked.id === movie.id)
  );

  function handleLikeMovie(movie: MovieList) {
    setMovieLiked((previous) => {
      if (previous) {
        const moviesLikedUpdated = moviesLiked.filter(
          (item) => item.id !== movie.id
        );
        handleLikeMovies(moviesLikedUpdated);
        return !previous;
      }

      const moviesLikedUpdated = [...moviesLiked, movie];
      handleLikeMovies(moviesLikedUpdated);

      return !previous;
    });
  }

  return (
    <div
      key={movie.id}
      className="flex shadow-sm min-w-[15rem] w-40 rounded-lg justify-center my-2 bg-stone-50 "
    >
      <div className="flex flex-col items-center px-4 py-6">
        <Image
          width={120}
          height={120}
          className="rounded-md"
          src={`${ENDPOINTS.BASE_URL_IMAGES}/${movie?.poster_path}`}
          alt={`Poster do ${movie?.original_title}`}
          title={`${movie?.original_title}`}
        />
        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full pt-2">
            <Link
              href={`/movies/${movie.id}`}
              className="text-sm font-semibold text-gray-800 break-words hover:text-blue-700"
            >
              {movie.title}
            </Link>
            <p className="bg-blue-500 text-white text-xs font-semibold p-1 rounded">
              {movie.vote_average}
            </p>
          </div>
          <p className="text-gray-700 text-xs">
            {format(new Date(movie?.release_date), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </p>
          <div className="mt-4 flex items-center">
            <div
              className="flex items-center text-gray-700 text-sm mr-3 cursor-pointer w-full justify-center"
              onClick={() => {
                handleLikeMovie(movie);
              }}
            >
              <svg
                fill={movieLiked ? '#3B82F6' : 'none'}
                viewBox="0 0 24 24"
                className="w-8 h-5"
                stroke={moviesLiked[movie.id] ? '#3B82F6' : 'currentColor'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>Curtir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}