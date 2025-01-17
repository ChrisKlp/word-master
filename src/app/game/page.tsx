import { GameButtonLink } from '@/components/game-button-link';
import { MainLayout } from '@/components/main-layout';
import { getGameRoute } from '@/lib/routes';

export default function Home() {
  return (
    <MainLayout>
      <h1 className="my-4 text-center text-xl font-bold">Wybierz grę:</h1>
      <div className="grid grid-cols-2 gap-4">
        <GameButtonLink
          title="2 sylaby"
          subtitle="sylaby otwarte"
          href={getGameRoute('s2_open')}
          icon={<span className="icon-text text-emerald-400">lo-dy</span>}
        />
        <GameButtonLink
          title="2 sylaby"
          subtitle="otwarta i zamknięta"
          href={getGameRoute('s2_open_close')}
          icon={<span className="icon-text text-emerald-400">ze-gar</span>}
        />
        <GameButtonLink
          title="2 sylaby"
          subtitle="zamknięta i otwarta"
          href={getGameRoute('s2_close_open')}
          icon={<span className="icon-text text-emerald-400">pił-ka</span>}
        />
      </div>
    </MainLayout>
  );
}
