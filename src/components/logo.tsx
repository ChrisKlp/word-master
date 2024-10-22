import Image from 'next/image';
import Link from 'next/link';

import mascot from '@/assets/mascot.svg';
import { cn } from '@/lib/utils';

type LogoProps = {
  href?: string;
  className?: string;
  variant?: 'default' | 'minimal';
};

export function Logo({
  href = '/',
  className,
  variant = 'default',
}: LogoProps) {
  return (
    <Link href={href} className={cn('flex items-center gap-3', className)}>
      <Image src={mascot} height={35} width={35} alt="Mascot" />
      {variant === 'default' && (
        <h1 className="text-xl font-extrabold text-violet-500">Word Master</h1>
      )}
    </Link>
  );
}
