import GameLayout from '@/components/game-level';
import twoSyllables from '@/lib/data/twoSyllables.json';
import { getGameLevelData } from '@/lib/game-utils';

export default function SingleGame({
  params: { id },
}: {
  params: { id: string };
}) {
  const gameData = getGameLevelData(twoSyllables, 10);
  return <GameLayout data={gameData} gameId={id} />;
}
