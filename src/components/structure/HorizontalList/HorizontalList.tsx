import { ReactNode } from 'react';

type HorizontalListProps = {
  children: ReactNode;
  title: string;
};

export function HorizontalList({ children, title }: HorizontalListProps) {
  return (
    <main className="mx-10 overflow-x-scroll overflow-y-scroll">
      <h2 className="text-lg font-semibold text-gray-800 pt-2 break-words">
        {title}
      </h2>
      <aside className="flex flex-row gap-4 overflow-scroll">{children}</aside>
    </main>
  );
}
