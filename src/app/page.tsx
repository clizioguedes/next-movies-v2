import Movies from '@/app/movies/page';
import { MoviesProvider } from '@/contexts/movies/Movies.context';

export default function Home() {
  return (
    <MoviesProvider>
      <Movies />
    </MoviesProvider>
  );
}
