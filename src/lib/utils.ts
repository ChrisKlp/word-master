import { type ClassValue, clsx } from 'clsx';
import { isArray } from 'remeda';
import { twMerge } from 'tailwind-merge';

import { PetData } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function persistPoints(points: number) {
  localStorage.setItem('wm_points', points.toString());
}

export function getStoredPoints() {
  return Number(localStorage.getItem('wm_points')) || 0;
}

export function getPetsData() {
  const petsData: PetData[] = [];
  const data = localStorage.getItem('wm_pets');

  if (data) {
    const parsedData = JSON.parse(data);

    if (isArray(parsedData)) {
      petsData.push(...(parsedData as PetData[]));
    }
  }

  return petsData;
}

export function setPetsData(petsData: PetData[]) {
  localStorage.setItem('wm_pets', JSON.stringify(petsData));
}

export function updatePetData(petsData: PetData) {
  const currentPetsData = getPetsData();
  const newPetsData = currentPetsData.filter((p) => p.id !== petsData.id);
  newPetsData.push(petsData);
  setPetsData(newPetsData);
}

export function getTotalExpForNextLevel(level: number, expStart: number) {
  let totalPoints = expStart;
  for (let i = 0; i < level; i++) {
    totalPoints += 10 * i;
  }
  return totalPoints;
}
