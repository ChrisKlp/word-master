import fiveSyllables from '@/lib/data/fiveSyllables.json';
import fourSyllables from '@/lib/data/fourSyllables.json';
import threeSyllables from '@/lib/data/threeSyllables.json';
import twoSyllables from '@/lib/data/twoSyllables.json';

import { GameData } from './types';

const gameData: Record<string, GameData> = {
  ['two-syllables']: twoSyllables,
  threeSyllables: threeSyllables,
  fourSyllables: fourSyllables,
  fiveSyllables: fiveSyllables,
};

export function getGameData(id: keyof typeof gameData) {
  return gameData[id];
}
