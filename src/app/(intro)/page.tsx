'use client';

import Image from 'next/image';
import Link from 'next/link';

import hero from '@/assets/hero.svg';
import { Button } from '@/components/ui/button';
import { routes } from '@/lib/routes';

export default function Home() {
  return (
    <div className="grid h-full justify-items-center gap-8">
      <Image
        src={hero}
        width={450}
        height={450}
        alt="Hero"
        className="w-full max-w-[400px] lg:max-w-[450px]"
      />
      <h1 className="max-w-[400px] text-center text-2xl font-bold text-neutral-600 lg:max-w-[550px] lg:text-3xl">
        Ucz się, ćwicz i doskonal swoją edukację z Word Master
      </h1>
      <Button asChild variant="secondary" className="w-full max-w-[400px]">
        <Link href={routes.game}>Zacznij grę</Link>
      </Button>
    </div>
  );
}
