import Image from 'next/image';

import hero from '@/assets/hero.svg';

export default function Home() {
  return (
    <div className="grid justify-center">
      <Image src={hero} width={450} alt="Hero" />
    </div>
  );
}
