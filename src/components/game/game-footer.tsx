import { Check, CircleX } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { GameStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

type GameFooterProps = {
  status: GameStatus;
  onClick: () => void;
};

export function GameFooter({ status, onClick }: GameFooterProps) {
  return (
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
          onClick={onClick}
        >
          SPRAWDŹ
        </Button>
      </div>
    </footer>
  );
}
