'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';

import pointsImg from '@/assets/points.svg';
import { getPoints } from '@/lib/utils';

import { Button } from './ui/button';

export default function PointsButton() {
  const [points, setPoints] = useState(0);

  useLayoutEffect(() => {
    setPoints(getPoints());
  }, []);

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
