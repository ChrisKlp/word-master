import GameLayout from '@/components/game-layout';
import twoSyllables from '@/lib/data/twoSyllables.json';

export default function SingleGame({
  params: { id },
}: {
  params: { id: string };
}) {
  return <GameLayout data={twoSyllables} />;
}
