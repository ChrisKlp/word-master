import { PropsWithChildren } from 'react';

import Logo from '@/components/logo';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="grid h-24 place-items-center">
        <Logo />
      </header>
      <main className="mb-8 h-full w-full flex-1 bg-slate-100 px-8">
        {children}
      </main>
    </>
  );
}
