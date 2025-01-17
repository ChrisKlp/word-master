'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAudio } from 'react-use';
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
import { gameImages } from '@/lib/game-utils';
import { useTextToSpeech } from '@/lib/hooks/useTestToSpeech';
import { GameLevelData, GameStatus, SelectedSyllable } from '@/lib/types';
import { setTenPoints } from '@/lib/utils';

import { CongratulationsView } from './congratulations-view';
import { GameFooter } from './game-footer';
import { GameHeader } from './game-header';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [correctAudio, _, correctControls] = useAudio({
    src: '/correct.wav',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [incorrectAudio, __, incorrectControls] = useAudio({
    src: '/incorrect.wav',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [finishAudio, ___, finishControls] = useAudio({
    src: '/finish.mp3',
  });

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
      correctControls.play();
      setTimeout(() => {
        if (progress + 1 < data.rounds) {
          setProgress((prev) => prev + 1);
          setSelectedSyllables([]);
        } else if (!isFinished) {
          setIsFinished(true);
          finishControls.play();
          setTenPoints();
        }
        setStatus(GameStatus.idle);
      }, RESULT_DELAY);
    } else {
      setStatus(GameStatus.error);
      incorrectControls.play();
      setTimeout(() => {
        setStatus(GameStatus.idle);
      }, RESULT_DELAY);
    }
  }

  return (
    <>
      {finishAudio}
      {correctAudio}
      {incorrectAudio}
      <div className="flex h-dvh flex-col overflow-hidden">
        <GameHeader isFinished={isFinished} currentProgress={currentProgress} />
        {isFinished ? (
          <CongratulationsView />
        ) : (
          <>
            <main className="container w-full flex-1 overflow-y-auto">
              <div className="flex h-full flex-col px-6">
                <div className="flex h-1/3 min-h-32 items-center justify-between">
                  <div className="flex h-full w-full items-center">
                    <div className="relative h-full w-full min-w-20 max-w-[200px]">
                      <Image
                        src={gameImages[progress % gameImages.length]}
                        fill
                        alt="person"
                        className="py-2"
                      />
                    </div>
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
                            (item) =>
                              !isShallowEqual(item.syllable, i.syllable),
                          ),
                        )
                      }
                    >
                      {i.syllable}
                    </Button>
                  ))}
                </div>

                <div className="flex h-1/3 min-h-44 flex-wrap content-end items-end justify-center gap-2 pb-6">
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
            <GameFooter onClick={handleUpdateProgress} status={status} />
          </>
        )}
      </div>
    </>
  );
}
