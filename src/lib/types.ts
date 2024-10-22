export type GameData = {
  words: string[];
  syllables: string[];
};

export type LevelData = {
  id: string;
  word: string;
  syllables: string[];
  displayWord: string;
};

export type GameLevelData = {
  levelData: LevelData[];
  rounds: number;
};

export type SelectedSyllable = {
  syllable: string;
  baseIndex: number;
};

export enum GameStatus {
  'idle' = 'idle',
  'success' = 'success',
  'error' = 'error',
  'warning' = 'warning',
}
