'use client';

import { ArrowLeft, Check, CircleX } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  filter,
  find,
  isShallowEqual,
  isStrictEqual,
  isTruthy,
  map,
} from 'remeda';

import { SpeakerButton } from '@/components/speaker-button';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { gameImages } from '@/lib/game-utils';
import useTextToSpeech from '@/lib/hooks/useTestToSpeech';
import { routes } from '@/lib/routes';
import { GameLevelData, GameStatus, SelectedSyllable } from '@/lib/types';
import { cn } from '@/lib/utils';

type GameLevelProps = {
  data: GameLevelData;
};

const RESULT_DELAY = 1200;

export function GameLevel({ data }: GameLevelProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [status, setStatus] = useState<GameStatus>(GameStatus.idle);
  const [selectedSyllables, setSelectedSyllables] = useState<
    SelectedSyllable[]
  >([]);
  const { speak, supported } = useTextToSpeech();

  const cWord = data.levelData[progress];

  useEffect(() => {
    if (cWord.displayWord && supported) {
      setTimeout(() => {
        speak(cWord.displayWord);
      }, 300);
    }
  }, [cWord.displayWord, speak, supported]);

  const currentProgress = (progress / data.rounds) * 100;

  function handleUpdateProgress() {
    const fullWord = map(selectedSyllables, (i) => i.syllable).join('');

    if (isStrictEqual(fullWord, cWord.displayWord)) {
      setStatus(GameStatus.success);
      setTimeout(() => {
        if (progress + 1 < data.rounds) {
          setProgress((prev) => prev + 1);
          setSelectedSyllables([]);
        } else if (!isFinished) {
          setIsFinished(true);
        }
        setStatus(GameStatus.idle);
      }, RESULT_DELAY);
    } else {
      setStatus(GameStatus.error);
      setTimeout(() => {
        setStatus(GameStatus.idle);
      }, RESULT_DELAY);
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
          <div className="flex h-32 items-center justify-between">
            <div className="flex items-center">
              <Image
                src={gameImages[progress % gameImages.length]}
                width={100}
                height={100}
                alt="Man"
              />
              <SpeakerButton text={cWord.displayWord} />
            </div>
            <SpeakerButton
              text={selectedSyllables.map((i) => i.syllable).join('')}
              size="speakerSmall"
            />
          </div>
          <div className="bg-math-lines flex flex-1 flex-wrap content-start gap-x-2 gap-y-3 px-6 pt-[7px]">
            {selectedSyllables.map((i, index) => (
              <Button
                key={i + index.toString()}
                size="word"
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
                  size="word"
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
      <footer
        className={cn(
          'bg-slate-100 transition-all',
          status === GameStatus.error && 'bg-red-100',
          status === GameStatus.success && 'bg-green-100',
        )}
      >
        <div className="container grid h-24 grid-flow-col grid-cols-2 items-center gap-8 px-6">
          <p
            className={cn(
              'inline-flex items-center gap-2 font-bold',
              status === GameStatus.error ? 'text-red-700' : 'text-green-700',
            )}
          >
            {(() => {
              switch (status) {
                case GameStatus.success:
                  return (
                    <>
                      <Check /> SUKCES
                    </>
                  );
                case GameStatus.error:
                  return (
                    <>
                      <CircleX /> BŁĄD
                    </>
                  );
                default:
                  return <></>;
              }
            })()}
          </p>
          <Button
            variant={status === GameStatus.error ? 'danger' : 'secondary'}
            className="block w-full truncate"
            onClick={handleUpdateProgress}
          >
            SPRAWDŹ
          </Button>
        </div>
      </footer>
    </div>
  );
}
