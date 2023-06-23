import Image from 'next/image';

import Link from 'next/link';

import Movies from '@/assets/images/movies.png';

export function Header() {
  return (
    <header
      className="flex flex-row justify-between bg-slate-50 p-4"
      data-testid="logo"
    >
      <Link href={'/'}>
        <Image
          src={Movies}
          width={100}
          height={37}
          alt="Logomarca App"
          priority
          className="cursor-pointer"
        />
      </Link>
      <Link href={'/favorite-movies'}>
        <div className="flex items-center text-gray-700 text-sm mr-3 cursor-pointer w-full justify-center">
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
          <span>Favoritos</span>
        </div>
      </Link>
    </header>
  );
}
