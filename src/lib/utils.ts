import { type ClassValue, clsx } from 'clsx';
import { isArray } from 'remeda';
import { twMerge } from 'tailwind-merge';

import { PetData } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setPoints(points: number) {
  localStorage.setItem('wm_points', points.toString());
}

export function updateLocalPoints(points: number) {
  const currentPoints = getPoints();
  setPoints(currentPoints + points);
}

export function getPoints() {
  return Number(localStorage.getItem('wm_points')) || 0;
}

export function getPetsData() {
  const petsData: PetData[] = [];
  const data = localStorage.getItem('wm_pets');
  if (data) {
    const parsedData = JSON.parse(data);
    if (isArray(parsedData)) {
      petsData.concat(parsedData as PetData[]);
    }
  }
  return petsData;
}

export function getTotalPoints(level: number, expStart: number) {
  let totalPoints = expStart;
  for (let i = 0; i < level; i++) {
    totalPoints += 10 * i;
  }
  return totalPoints;
}
