import Image from 'next/image';
import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useAudio, useWindowSize } from 'react-use';

import pointsImg from '@/assets/points.svg';
import { usePoints } from '@/components/points-provider';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { gameImages } from '@/lib/game-utils';
import { PetData } from '@/lib/types';
import { getTotalExpForNextLevel, updatePetData } from '@/lib/utils';

const EXP_PROGRESS_STEP = 10;
const LEVEL_UPDATE_DELAY = 800;

export default function Pet({ data }: { data: PetData }) {
  const [experience, setExperience] = useState(data.exp);
  const [level, setLevel] = useState(data.level);
  const { removePoints, points } = usePoints();
  const { width, height } = useWindowSize();

  const [nextLevelAudio, , nextLevelControls] = useAudio({
    src: '/next-level.mp3',
  });
  const [cashAudio, , cashControls] = useAudio({
    src: '/cash.mp3',
  });

  const totalLevelExp = getTotalExpForNextLevel(level, data.expStart);
  const progress = (experience / totalLevelExp) * 100;

  const handleUpdateProgress = () => {
    cashControls.seek(0);
    cashControls.play();
    let newLevel = level;
    let newExperience = experience + EXP_PROGRESS_STEP;
    setExperience(newExperience);
    removePoints(10);
    setTimeout(() => {
      if (newExperience >= totalLevelExp) {
        newExperience = 0;
        newLevel += 1;
        setLevel(newLevel);
        setExperience(newExperience);
        nextLevelControls.play();
      }
      updatePetData({
        ...data,
        exp: newExperience,
        level: newLevel,
      });
    }, LEVEL_UPDATE_DELAY);
  };

  const isNewLevelAchieved =
    progress === 0 && level > 1 && data.level !== level;

  return (
    <>
      {nextLevelAudio}
      {cashAudio}
      <div className="mb-8 mt-8 grid w-full justify-items-center gap-6">
        {isNewLevelAchieved && (
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={300}
            tweenDuration={1000}
          />
        )}
        <div className="relative h-72 w-72 overflow-hidden">
          {gameImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              fill
              alt={`Slide ${index}`}
              className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
                index === (level - 1) % gameImages.length
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="grid w-[80%] justify-items-center">
          <h2 className="text-2xl font-extrabold">{data.name}</h2>
          <h3 className="text-lg font-extrabold text-indigo-500">
            LEVEL {level}
          </h3>
          <Progress className="my-4 h-6 w-full" value={progress} />
          <p className="upp text-center text-sm text-slate-500">
            Przekaż zdobytą energię.
          </p>
        </div>
        <Button
          onClick={handleUpdateProgress}
          disabled={progress === 100 || points < 10}
        >
          <span className="flex items-center">
            Zapłać Energią
            <span className="flex items-center text-orange-500">
              <Image
                src={pointsImg}
                height={20}
                width={20}
                alt="Points"
                className="ml-2"
              />
              10
            </span>
          </span>
        </Button>
      </div>
    </>
  );
}
