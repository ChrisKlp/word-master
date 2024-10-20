import { WholeWord } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GameButtonProps = {
  href: string;
  title: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function GameButtonLink({
  href,
  title,
  icon,
  variant,
}: GameButtonProps) {
  return (
    <Button asChild variant={variant} className="h-36 w-full">
      <Link href={href}>
        <span className="grid justify-items-center gap-2">
          {icon ?? (
            <WholeWord
              className={cn('size-16', variant ? '' : 'stroke-emerald-500')}
            />
          )}
          {title}
        </span>
      </Link>
    </Button>
  );
}
