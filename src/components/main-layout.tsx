import { PropsWithChildren } from 'react';

import Logo from '@/components/logo';
import PointsButton from '@/components/points-button';
import { routes } from '@/lib/routes';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <header className="flex h-16 items-center justify-between px-6">
        <Logo href={routes.game} />
        <PointsButton />
      </header>
      <main className="w-full flex-1 overflow-y-auto">
        <div className="px-6">{children}</div>
      </main>
    </div>
  );
}
