'use client';

import { useParams } from 'next/navigation';

export default function MovieDetails() {
  const { id } = useParams();
  console.log('params', id);

  return <h1>Detalhes do filme</h1>;
}
