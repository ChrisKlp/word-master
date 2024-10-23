import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

import { Button } from '@/components/ui/button';
import { routes } from '@/lib/routes';

export function CongratulationsView() {
  const { width, height } = useWindowSize();

  return (
    <main className="container mt-10 grid w-full flex-1 content-start justify-items-center gap-4 overflow-y-auto">
      <ReactConfetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
        tweenDuration={10000}
      />
      <Image src={'/finish.svg'} width={200} height={200} alt="Man" />
      <h1 className="text-3xl font-bold">GRATULACJE!</h1>
      <p>Runda została ukończona.</p>
      <div className="flex items-center gap-2">
        <Image src={'/points.svg'} width={40} height={40} alt="points" />
        <p className="font-bold text-amber-500">+ 10 punktów</p>
      </div>
      <Button asChild>
        <Link href={routes.game}>Powrót</Link>
      </Button>
    </main>
  );
}
