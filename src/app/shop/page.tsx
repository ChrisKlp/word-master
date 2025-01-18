'use client';

import { useEffect, useState } from 'react';

import { MainLayout } from '@/components/main-layout';
import Pet from '@/components/shop/pet';
import { defaultPetsData } from '@/lib/pets-data';
import { PetData } from '@/lib/types';
import { getPetsData } from '@/lib/utils';

export default function ShopPage() {
  const [petsData, setPetsData] = useState<PetData[]>([]);

  const frankyData = petsData.find((p) => p.id === defaultPetsData.franky.id);

  useEffect(() => {
    setPetsData(getPetsData());
  }, []);

  return (
    <MainLayout>
      <Pet data={frankyData ?? defaultPetsData.franky} />
    </MainLayout>
  );
}
