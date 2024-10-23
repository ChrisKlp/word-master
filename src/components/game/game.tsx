'use client';

import React from 'react';

import { getGameLevelData } from '@/lib/game-utils';
import { GameData } from '@/lib/types';

import { GameLevel } from './game-level';

export function Game({ gameData }: { gameData: GameData }) {
  const levelData = getGameLevelData(gameData, 10);

  return <GameLevel data={levelData} />;
}
