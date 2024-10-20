import Image from 'next/image';
import Link from 'next/link';

import mascot from '@/assets/mascot.svg';

export default function Logo({ href = '/' }) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <Image src={mascot} height={35} width={35} alt="Mascot" />
      <h1 className="text-xl font-extrabold text-violet-500">Word Master</h1>
    </Link>
  );
}
