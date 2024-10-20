import { CaseSensitive } from 'lucide-react';

import GameButton from '@/components/game-button';
import MainLayout from '@/components/main-layout';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <MainLayout>
      <h1 className="my-4 text-center text-xl font-bold">Wybierz grę:</h1>
      <div className="grid grid-cols-2 gap-4">
        <GameButton title="2 sylaby" />
        <GameButton
          title="3 sylaby"
          icon={<CaseSensitive className="size-16 stroke-indigo-500" />}
        />
      </div>
    </MainLayout>
  );
}
