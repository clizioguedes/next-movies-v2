'use client';

import { getMovieDetails } from '@/services/requests/movies';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function MovieDetails() {
  const { id } = useParams();

  const { data, isInitialLoading } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id),
  });

  if (isInitialLoading) {
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    );
  }
  console.log('data', data);

  return <h1>{`Detalhes do filme ${data?.title}`}</h1>;
}
