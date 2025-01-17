import { map, pipe, randomInteger, shuffle, take, unique } from 'remeda';
import { v4 as uuidv4 } from 'uuid';

import { GameData, GameLevelData } from './types';

export const gameImages = [
  '/man.svg',
  '/woman.svg',
  '/robot.svg',
  '/zombie.svg',
];

export function pickWords(words: string[], n = 10) {
  return pipe(words, shuffle(), take(n));
}

export function pickSyllables(syllables: string[], word: string, n = 4) {
  const wordSyllables = word.split('-');
  const syllablesSet = new Set(wordSyllables);
  const uniqueSyllables = unique(syllables);

  while (syllablesSet.size < n) {
    const randomIndex = randomInteger(0, uniqueSyllables.length - 1);
    const randomSyllable = uniqueSyllables[randomIndex];
    syllablesSet.add(randomSyllable);
  }

  return shuffle(Array.from(syllablesSet));
}

export function getDisplayWord(word: string) {
  return word.replaceAll('-', '');
}

export function getGameLevelData(gameData: GameData, n = 10): GameLevelData {
  const words = pickWords(gameData.words, n);
  const levelData = map(words, (word) => {
    const syllables = pickSyllables(
      gameData.syllables,
      word,
      gameData.syllablesToPick,
    );
    return {
      id: uuidv4(),
      word,
      syllables,
      displayWord: getDisplayWord(word),
    };
  });

  return {
    levelData,
    rounds: n,
    points: gameData.points,
  };
}
