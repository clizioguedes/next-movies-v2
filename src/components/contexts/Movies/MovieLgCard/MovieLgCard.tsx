import { ENDPOINTS } from '@/constants/endpoints';
import { MovieList } from '@/types/types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';

type MovieLgCardProps = {
  movie: MovieList;
};

export function MovieLgCard({ movie }: MovieLgCardProps) {
  return (
    <div
      key={movie.id}
      className="flexshadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl p-8 bg-stone-50"
    >
      <div className="flex items-start gap-4">
        <Image
          width={120}
          height={120}
          className="rounded-md"
          src={`${ENDPOINTS.BASE_URL_IMAGES}/${movie?.poster_path}`}
          alt={`Poster do ${movie?.original_title}`}
          title={`${movie?.original_title}`}
        />
        <div className="">
          <div className="flex items-center justify-between">
            <Link
              href={`/movies/${movie.id}`}
              className="text-sm font-semibold text-gray-800 break-words hover:text-blue-700"
            >
              {movie.title}
            </Link>
            <small className="text-sm text-gray-700">
              {' '}
              {format(new Date(movie?.release_date), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </small>
          </div>
          <p className="bg-blue-500 text-white text-xs font-semibold p-1 rounded w-8 text-center">
            {movie.vote_average}
          </p>
          <p className="mt-3 text-gray-700 text-sm">{movie.overview}</p>
          <div className="mt-4 flex items-center">
            <svg
              fill={'#3B82F6'}
              viewBox="0 0 24 24"
              className="w-8 h-5"
              stroke={'#3B82F6'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
