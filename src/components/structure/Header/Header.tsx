import Image from 'next/image';

import Link from 'next/link';

import Logo from '@/assets/images/logo.png';
import Movies from '@/assets/images/movies.png';

export function Header() {
  return (
    <header className="flex flex-row justify-between bg-slate-50 p-4">
      <Link href={'/'}>
        <Image
          src={Logo}
          width={180}
          height={37}
          alt="Logomarca da Technical Test"
          priority
          className="cursor-pointer"
        />
      </Link>
      <Link href={'/'}>
        <Image
          src={Movies}
          width={20}
          height={37}
          alt="Logomarca da Technical Test"
          priority
          className="cursor-pointer"
        />
      </Link>
      <Link href={'/favorite-movies'}>Filmes Favoritos</Link>
    </header>
  );
}
