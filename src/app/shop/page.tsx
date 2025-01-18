'use client';

import { MainLayout } from '@/components/main-layout';
import Pet from '@/components/shop/pet';
import { defaultPetsData } from '@/lib/pets-data';
import { getPetsData } from '@/lib/utils';

export default function ShopPage() {
  const petsStorageData = getPetsData();
  const frankyData = petsStorageData.find(
    (p) => p.id === defaultPetsData.franky.id,
  );

  return (
    <MainLayout>
      <Pet data={frankyData ?? defaultPetsData.franky} />
    </MainLayout>
  );
}
