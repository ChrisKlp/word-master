import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { routes } from '@/lib/routes';

type GameHeaderProps = {
  isFinished: boolean;
  currentProgress: number;
};

export function GameHeader({
  isFinished,
  currentProgress,
}: GameHeaderProps) {
  return (
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
  );
}
