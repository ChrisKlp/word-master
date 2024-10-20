'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import { routes } from '@/lib/routes';

import { Button } from './ui/button';
import { Progress } from './ui/progress';

type GameLayoutProps = {
  data: {
    words: string[];
    syllables: string[];
  };
  gameId: string;
};

export default function GameLayout({ data }: GameLayoutProps) {
  const [gameData] = useState({
    words: data.words.slice(0, 10),
  });
  const [progress] = useState(2);

  const getCurrentWord = () => {
    if (progress >= gameData.words.length) {
      return null;
    }
    return gameData.words[progress];
  };

  const getFullWord = () => getCurrentWord()?.replaceAll('-', '');

  const getWordSyllables = () => {
    return getCurrentWord()?.split('-');
  };

  const getRandomSyllables = () => {
    return data.syllables.slice(10, 17);
  };

  const getSyllablesToPick = () => {
    const wordSyllables = getWordSyllables() ?? [];
    return [...getRandomSyllables(), ...wordSyllables];
  };

  // const currentProgress = (progress / gameData.words.length) * 100;

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
        <Progress value={67} />
      </header>
      <main className="container w-full flex-1 overflow-y-auto">
        <div className="flex h-full flex-col px-6">
          <div className="grid h-32 place-items-center">
            <p className="text-4xl font-bold capitalize">{getFullWord()}</p>
          </div>
          <div className="bg-math-lines flex flex-1 flex-wrap content-start gap-x-2 gap-y-4 px-6 pt-[9px]">
            {getWordSyllables()?.map((i, index) => (
              <Button key={index}>{i}</Button>
            ))}
          </div>
          <div className="flex h-44 flex-wrap content-end items-end justify-center gap-2 pb-6">
            {getSyllablesToPick().map((i, index) => (
              <Button key={index}>{i}</Button>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-green-400">
        <div className="container grid h-24 items-center gap-2 px-6">
          <Button variant="secondary" className="w-full">
            Sukces
          </Button>
        </div>
      </footer>
    </div>
  );
}
