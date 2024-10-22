import { notFound } from 'next/navigation';

import { getGameData } from '@/lib/game-data';

import { Game } from './_components/game';

export const dynamic = 'force-dynamic';

export default function SingleGame({
  params: { id },
}: {
  params: { id: string };
}) {
  const gameData = getGameData(id);

  if (!gameData) {
    notFound();
  }

  return <Game gameData={gameData} />;
}
