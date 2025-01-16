import { useState } from 'react';
import { useEffectOnce } from 'react-use';

import { getGameLevelData } from '@/lib/game-utils';
import { GameData, GameLevelData } from '@/lib/types';

import { GameLevel } from './game-level';

export function Game({ gameData }: { gameData: GameData }) {
  const [levelData, setLevelData] = useState<GameLevelData>();

  useEffectOnce(() => {
    setLevelData(getGameLevelData(gameData));
  });

  if (!levelData) {
    return null;
  }

  return <GameLevel data={levelData} />;
}
