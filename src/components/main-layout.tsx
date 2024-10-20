import { PropsWithChildren } from 'react';

import Logo from '@/components/logo';
import PointsButton from '@/components/points-button';
import { routes } from '@/lib/routes';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col overflow-hidden">
      <header className="flex h-16 items-center justify-between px-6">
        <Logo href={routes.games} />
        <PointsButton />
      </header>
      <main className="mb-24 grid h-full w-full flex-1 place-content-center px-8">
        {children}
      </main>
    </div>
  );
}
