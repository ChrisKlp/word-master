export type GameData = {
  words: string[];
  syllables: string[];
  points: number;
  syllablesToPick: number;
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
  points: number;
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

export type PetData = {
  id: string;
  name: string;
  level: number;
  exp: number;
  expStart: number;
};

export type PetStorageData = Omit<PetData, 'expStart'>;
