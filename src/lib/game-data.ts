import s2_CloseOpen from '@/lib/data/s2-close-open.json';
import s2_ConsonantClusters from '@/lib/data/s2-consonant-clusters.json';
import s2_OpenClose from '@/lib/data/s2-open-close.json';
import s2_Open from '@/lib/data/s2-open.json';

import { GameData } from './types';

export const gameNames = {
  s2_open: 'dwie-sylaby-otwarte',
  s2_open_close: 'dwie-sylaby-otwarte-zamkniete',
  s2_close_open: 'dwie-sylaby-zamkniete-otwarte',
  s2_consonant_clusters: 'dwie-sylaby-zgrupowania-spolglosek',
};

const gameData: Record<string, GameData> = {
  [gameNames.s2_open]: {
    ...s2_Open,
    points: 5,
    syllablesToPick: 5,
  },
  [gameNames.s2_open_close]: {
    ...s2_OpenClose,
    points: 10,
    syllablesToPick: 5,
  },
  [gameNames.s2_close_open]: {
    ...s2_CloseOpen,
    points: 10,
    syllablesToPick: 5,
  },
  [gameNames.s2_consonant_clusters]: {
    ...s2_ConsonantClusters,
    points: 15,
    syllablesToPick: 5,
  },
};

export function getGameData(id: keyof typeof gameData) {
  return gameData[id];
}
