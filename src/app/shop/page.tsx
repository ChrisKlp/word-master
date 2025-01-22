'use client';

import { useLayoutEffect, useState } from 'react';

import { MainLayout } from '@/components/main-layout';
import Pet from '@/components/shop/pet';
import { defaultPetsData } from '@/lib/pets-data';
import { PetData } from '@/lib/types';
import { getPetsData } from '@/lib/utils';

export default function ShopPage() {
  const [petsData, setPetsData] = useState<PetData[]>();

  const frankyData =
    petsData?.find((p) => p.id === defaultPetsData.franky.id) ??
    defaultPetsData.franky;

  useLayoutEffect(() => {
    setPetsData(getPetsData());
  }, []);

  return <MainLayout>{petsData && <Pet data={frankyData} />}</MainLayout>;
}
