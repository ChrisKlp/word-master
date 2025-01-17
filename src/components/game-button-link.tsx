import { WholeWord } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GameButtonProps = {
  href: string;
  title?: string;
  titleCss?: string;
  category: string;
  description?: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function GameButtonLink({
  href,
  title,
  titleCss,
  category,
  description,
  icon,
  variant,
}: GameButtonProps) {
  return (
    <Button asChild variant={variant} className="text-md h-36 w-full">
      <Link href={href} className="grid justify-items-center">
        <span className="grid max-w-full justify-items-center truncate">
          <span
            className={cn(
              'mb-2 max-w-full truncate text-emerald-400',
              titleCss,
            )}
          >
            {title ? (
              <span className="icon-text">{title}</span>
            ) : (
              (icon ?? (
                <WholeWord
                  className={cn('size-16', variant ? '' : 'stroke-emerald-500')}
                />
              ))
            )}
          </span>
          <span className="max-w-full truncate">{category}</span>
          <span className="max-w-full truncate text-xs font-normal lowercase">
            {description}
          </span>
        </span>
      </Link>
    </Button>
  );
}
