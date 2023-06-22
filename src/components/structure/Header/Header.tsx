import Image from 'next/image';

import Link from 'next/link';

import Logo from '@/assets/images/logo.png';

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
    </header>
  );
}
