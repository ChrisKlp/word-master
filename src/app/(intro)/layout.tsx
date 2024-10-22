import { PropsWithChildren } from 'react';

import { Logo } from '@/components/logo';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-dvh flex-col">
      <header className="grid h-24 place-items-center">
        <Logo />
      </header>
      <main className="mb-24 grid h-full w-full flex-1 place-content-center px-8">
        {children}
      </main>
    </div>
  );
}
