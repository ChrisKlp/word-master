import { WholeWord } from 'lucide-react';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GameButtonProps = {
  title: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function GameButton({ title, icon, variant }: GameButtonProps) {
  return (
    <Button variant={variant} className="h-36 w-full">
      <span className="grid justify-items-center gap-2">
        {icon ?? (
          <WholeWord
            className={cn('size-16', variant ? '' : 'stroke-emerald-500')}
          />
        )}
        {title}
      </span>
    </Button>
  );
}
