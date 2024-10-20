import Image from 'next/image';

import hero from '@/assets/hero.svg';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="grid h-full justify-items-center gap-8">
      <Image src={hero} width={400} height={400} alt="Hero" />
      <h1 className="max-w-[400px] text-center text-2xl font-bold text-neutral-600 lg:text-3xl">
        Ucz się, ćwicz i doskonal swoją edukację z Word Master
      </h1>
      <Button variant="secondary" className="w-full max-w-[400px]">
        Zacznij grę
      </Button>
    </div>
  );
}
