import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setPoints(points: number) {
  localStorage.setItem('wm_points', points.toString());
}

export function getPoints() {
  return Number(localStorage.getItem('wm_points')) || 0;
}
