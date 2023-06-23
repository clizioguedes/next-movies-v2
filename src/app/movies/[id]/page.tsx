'use client';

import { ENDPOINTS } from '@/constants/endpoints';
import { getMovieDetails } from '@/services/requests/movies';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import ImdbLogo from '@/assets/images/imdb.svg';
import { Loading } from '@/components/structure/Loading';

export default function MovieDetails() {
  const { id } = useParams();

  const { data, isInitialLoading } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id),
  });

  if (isInitialLoading) {
    return <Loading />;
  }

  return (
    <main className="container my-4 mx-auto md:px-6 bg-slate-50 py-4">
      <section className="flex gap-4 mb-4">
        <div className="flex flex-col">
          <Image
            width={256}
            height={256}
            className="rounded-md"
            src={`${ENDPOINTS.BASE_URL_IMAGES}/${data?.poster_path}`}
            alt={`Poster do ${data?.original_title}`}
            title={`${data?.original_title}`}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="w-full">
            <div className="flex justify-between items-center gap-2 w-full">
              <div className="flex items-center gap-2 w-full ">
                <h2 className="text-2xl font-bold">{data?.title}</h2>
                <p className="bg-blue-500 text-white text-xs font-semibold rounded text-center flex justify-center items-center h-6 w-8">
                  {data?.vote_average.toFixed(1)}
                </p>
              </div>

              <Link
                href={`https://www.imdb.com/title/${data?.imdb_id}`}
                target="_blank"
              >
                <Image src={ImdbLogo} width={72} height={72} alt="IMDB Logo" />
              </Link>
            </div>

            <span className="text-sm">
              {data?.release_date &&
                format(new Date(data?.release_date), "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold italic">{data?.tagline}</p>
            <p className="text-sm">{data?.overview}</p>
            <div className="flex gap-1">
              {data?.genres.map((genre) => {
                return (
                  <div
                    key={genre.id}
                    className="flex justify-center items-center my-1 font-medium py-1 px-2 rounded-full text-blue-100 bg-blue-500"
                  >
                    <div className="text-xs font-normal leading-none max-w-full flex-initial">
                      {genre.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
