import { map, pipe, randomInteger, shuffle, take, unique } from 'remeda';
import { v4 as uuidv4 } from 'uuid';

import { GameData } from './types';

export function pickWords(words: string[], n = 10) {
  return pipe(words, shuffle(), take(n));
}

export function pickSyllables(syllables: string[], word: string, n = 4) {
  const wordSyllables = word.split('-');
  const syllablesSet = [...wordSyllables];
  const uniqueSyllables = unique(syllables);

  while (syllablesSet.length < n) {
    const randomIndex = randomInteger(0, unique(syllables).length - 1);
    const randomSyllable = uniqueSyllables[randomIndex];
    syllablesSet.push(randomSyllable);
  }

  return shuffle(Array.from(syllablesSet));
}

export function getDisplayWord(word: string) {
  return word.replaceAll('-', '');
}

export function getGameLevelData(gameData: GameData, n = 10) {
  const words = pickWords(gameData.words, n);
  const levelData = map(words, (word) => {
    const syllables = pickSyllables(gameData.syllables, word, 5);
    return { id: uuidv4(), word, syllables, displayWord: getDisplayWord(word) };
  });

  return {
    levelData,
    rounds: n,
  };
}
