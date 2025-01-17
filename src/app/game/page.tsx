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
          titleCss="text-lime-500"
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
          titleCss="text-green-600"
          category="2 sylaby"
          description="z grupami spółgłoskowymi"
          href={getGameRoute('s2_consonant_clusters')}
        />
        <GameButtonLink
          title="fo-te-le"
          titleCss="text-indigo-400"
          category="3-4 sylaby"
          href={getGameRoute('s3_syllables')}
        />
        <GameButtonLink
          title="ku-li-nar-ny"
          titleCss="text-purple-600"
          category="4-5 sylab"
          href={getGameRoute('s4_syllables')}
        />
      </div>
    </MainLayout>
  );
}
