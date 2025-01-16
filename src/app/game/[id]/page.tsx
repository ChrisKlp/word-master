'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';

import { Game } from '@/components/game/game';
import { getGameData } from '@/lib/game-data';

export const dynamic = 'force-dynamic';

export default function SingleGame({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const gameData = getGameData(id);

  if (!gameData) {
    notFound();
  }

  return <Game gameData={gameData} />;
}
