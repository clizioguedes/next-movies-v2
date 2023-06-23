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
        <div className="flex flex-col gap-0">
          <div className="flex items-center justify-between">
            <Link
              href={`/movies/${movie.id}`}
              className="text-sm font-semibold text-gray-800 break-words hover:text-blue-700"
            >
              {movie.title}
            </Link>

            <p className="bg-blue-500 text-white text-xs font-semibold p-1 rounded w-8 text-center">
              {movie.vote_average}
            </p>
          </div>
          <small className="text-sm text-gray-700">
            {' '}
            {format(new Date(movie?.release_date), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </small>
          <p className="mt-3 text-gray-700 text-sm">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
