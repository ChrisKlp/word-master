import s2_open_close from '@/lib/data/s2-open-close.json';
import s2_open from '@/lib/data/s2-open.json';

import { GameData } from './types';

export const gameNames = {
  s2_open: 'dwie-sylaby-otwarte',
  s2_open_close: 'dwie-sylaby-otwarte-zamkniete',
};

const gameData: Record<string, GameData> = {
  [gameNames.s2_open]: s2_open,
  [gameNames.s2_open_close]: s2_open_close,
};

export function getGameData(id: keyof typeof gameData) {
  return gameData[id];
}
