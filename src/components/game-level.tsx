'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  filter,
  find,
  isShallowEqual,
  isStrictEqual,
  isTruthy,
  map,
} from 'remeda';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { routes } from '@/lib/routes';
import { GameLevelData, SelectedSyllable } from '@/lib/types';

type GameLevelProps = {
  data: GameLevelData;
  gameId: string;
};

export default function GameLevel({ data }: GameLevelProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedSyllables, setSelectedSyllables] = useState<
    SelectedSyllable[]
  >([]);

  const cWord = data.levelData[progress];

  const currentProgress = (progress / data.rounds) * 100;

  function handleUpdateProgress() {
    const fullWord = map(selectedSyllables, (i) => i.syllable).join('');

    if (isStrictEqual(fullWord, cWord.displayWord)) {
      if (progress + 1 < data.rounds) {
        setProgress((prev) => prev + 1);
        setSelectedSyllables([]);
      } else if (!isFinished) {
        setIsFinished(true);
      }
    }
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <header className="container flex h-16 items-center justify-between gap-2 px-6">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="-ml-2 flex-shrink-0"
        >
          <Link href={routes.game}>
            <ArrowLeft className="stroke-slate300" />
          </Link>
        </Button>
        <Progress value={isFinished ? 100 : currentProgress} />
      </header>
      <main className="container w-full flex-1 overflow-y-auto">
        <div className="flex h-full flex-col px-6">
          <div className="grid h-32 place-items-center">
            <p className="text-4xl font-bold capitalize">{cWord.displayWord}</p>
          </div>
          <div className="bg-math-lines flex flex-1 flex-wrap content-start gap-x-2 gap-y-4 px-6 pt-[9px]">
            {selectedSyllables.map((i, index) => (
              <Button
                key={i + index.toString()}
                onClick={() =>
                  setSelectedSyllables((prev) =>
                    filter(
                      prev,
                      (item) => !isShallowEqual(item.syllable, i.syllable),
                    ),
                  )
                }
              >
                {i.syllable}
              </Button>
            ))}
          </div>
          <div className="flex h-44 flex-wrap content-end items-end justify-center gap-2 pb-6">
            {cWord.syllables.map((i, index) => {
              const currentItem: SelectedSyllable = {
                syllable: i,
                baseIndex: index,
              };
              return (
                <Button
                  key={i + index.toString()}
                  onClick={() =>
                    setSelectedSyllables((prev) => [...prev, currentItem])
                  }
                  disabled={isTruthy(
                    find(selectedSyllables, (s) =>
                      isShallowEqual(s, currentItem),
                    ),
                  )}
                >
                  {i}
                </Button>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="bg-green-400">
        <div className="container grid h-24 items-center gap-2 px-6">
          <Button
            variant="secondary"
            className="w-full"
            onClick={handleUpdateProgress}
          >
            Kontynuuj
          </Button>
        </div>
      </footer>
    </div>
  );
}
