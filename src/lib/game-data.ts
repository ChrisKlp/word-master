import s2_CloseOpen from '@/lib/data/s2-close-open.json';
import s2_ConsonantClusters from '@/lib/data/s2-consonant-clusters.json';
import s2_OpenClose from '@/lib/data/s2-open-close.json';
import s2_Open from '@/lib/data/s2-open.json';
import s3_Syllables from '@/lib/data/s3-syllables.json';
import s4_Syllables from '@/lib/data/s4-syllables.json';

import { GameData } from './types';

export const gameNames = {
  s2_open: 'dwie-sylaby-otwarte',
  s2_open_close: 'dwie-sylaby-otwarte-zamkniete',
  s2_close_open: 'dwie-sylaby-zamkniete-otwarte',
  s2_consonant_clusters: 'dwie-sylaby-zgrupowania-spolglosek',
  s3_syllables: 'trzy-sylaby',
  s4_syllables: 'cztery-sylaby',
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
  [gameNames.s3_syllables]: {
    ...s3_Syllables,
    points: 25,
    syllablesToPick: 5,
  },
  [gameNames.s4_syllables]: {
    ...s4_Syllables,
    points: 40,
    syllablesToPick: 6,
  },
};

export function getGameData(id: keyof typeof gameData) {
  return gameData[id];
}
