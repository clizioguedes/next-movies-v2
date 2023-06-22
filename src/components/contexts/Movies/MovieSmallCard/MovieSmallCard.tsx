import { ENDPOINTS } from '@/constants/endpoints';
import { Movie } from '@/types/types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';

type MovieSmallCardProps = {
  movie: Movie;
};

export function MovieSmallCard({ movie }: MovieSmallCardProps) {
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
          <div className="flex items-center justify-between gap-1 w-full pt-2">
            <Link
              href={`/movies/${movie.id}`}
              className="text-sm font-semibold text-gray-800 break-words cursor-pointer hover:text-blue-700"
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
            <div className="flex text-gray-700 text-sm mr-3">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>12</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
