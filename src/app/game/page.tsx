import { GameButtonLink } from '@/components/game-button-link';
import { MainLayout } from '@/components/main-layout';
import { getGameRoute } from '@/lib/routes';

export default function Home() {
  return (
    <MainLayout>
      <h1 className="my-4 text-center text-xl font-bold">Wybierz grę:</h1>
      <div className="grid grid-cols-2 gap-4">
        <GameButtonLink
          title="lo-dy"
          category="2 sylaby"
          description="sylaby otwarte"
          href={getGameRoute('s2_open')}
        />
        <GameButtonLink
          title="ze-gar"
          category="2 sylaby"
          description="otwarta i zamknięta"
          href={getGameRoute('s2_open_close')}
        />
        <GameButtonLink
          title="pił-ka"
          category="2 sylaby"
          description="zamknięta i otwarta"
          href={getGameRoute('s2_close_open')}
        />
        <GameButtonLink
          title="brzu-szek"
          category="2 sylaby"
          description="z grupami spółgłoskowymi"
          href={getGameRoute('s2_consonant_clusters')}
        />
      </div>
    </MainLayout>
  );
}
