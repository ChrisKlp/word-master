import { CaseSensitive } from 'lucide-react';

import GameButtonLink from '@/components/game-button-link';
import MainLayout from '@/components/main-layout';
import { gameRoutes } from '@/lib/routes';

export default function Home() {
  return (
    <MainLayout>
      <h1 className="my-4 text-center text-xl font-bold">Wybierz grę:</h1>
      <div className="grid grid-cols-2 gap-4">
        <GameButtonLink title="2 sylaby" href={gameRoutes['two-syllables']} />
        <GameButtonLink
          title="3 sylaby"
          href={gameRoutes['three-syllables']}
          icon={<CaseSensitive className="size-16 stroke-indigo-500" />}
        />
      </div>
    </MainLayout>
  );
}
