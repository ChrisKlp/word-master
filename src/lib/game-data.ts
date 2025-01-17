import s2_close_open from '@/lib/data/s2-close-open.json';
import s2_consonant_clusters from '@/lib/data/s2-consonant-clusters.json';
import s2_open_close from '@/lib/data/s2-open-close.json';
import s2_open from '@/lib/data/s2-open.json';

import { GameData } from './types';

export const gameNames = {
  s2_open: 'dwie-sylaby-otwarte',
  s2_open_close: 'dwie-sylaby-otwarte-zamkniete',
  s2_close_open: 'dwie-sylaby-zamkniete-otwarte',
  s2_consonant_clusters: 'dwie-sylaby-zgrupowania-spolglosek',
};

const gameData: Record<string, GameData> = {
  [gameNames.s2_open]: s2_open,
  [gameNames.s2_open_close]: s2_open_close,
  [gameNames.s2_close_open]: s2_close_open,
  [gameNames.s2_consonant_clusters]: s2_consonant_clusters,
};

export function getGameData(id: keyof typeof gameData) {
  return gameData[id];
}
