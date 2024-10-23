import { WholeWord } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GameButtonProps = {
  href: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function GameButtonLink({
  href,
  title,
  subtitle,
  icon,
  variant,
}: GameButtonProps) {
  return (
    <Button asChild variant={variant} className="text-md h-36 w-full truncate">
      <Link href={href} className="grid justify-items-center">
        <span className="grid justify-items-center">
          <span className="mb-2">
            {icon ?? (
              <WholeWord
                className={cn('size-16', variant ? '' : 'stroke-emerald-500')}
              />
            )}
          </span>
          {title}
          <span className="text-wrap text-center text-xs font-normal lowercase">
            {subtitle}
          </span>
        </span>
      </Link>
    </Button>
  );
}
