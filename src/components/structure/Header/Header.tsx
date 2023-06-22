import Image from 'next/image';

import Logo from '@/assets/images/logo.png';

export function Header() {
  return (
    <header className="flex flex-row justify-between bg-slate-50 p-4">
      <Image
        src={Logo}
        width={180}
        height={37}
        alt="Logomarca da Technical Test"
        priority
      />
    </header>
  );
}
