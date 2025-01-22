'use client';

import Image from 'next/image';
import Link from 'next/link';

import pointsImg from '@/assets/points.svg';
import { usePoints } from '@/components/points-provider';
import { Button } from '@/components/ui/button';

export function PointsButton() {
  const { points } = usePoints();

  return (
    <Button asChild variant="ghost" className="text-orange-500">
      <Link href="/shop">
        <Image
          src={pointsImg}
          height={28}
          width={28}
          alt="Points"
          className="mr-2"
        />
        {points}
      </Link>
    </Button>
  );
}
