import Image from 'next/image';
import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useAudio, useWindowSize } from 'react-use';

import pointsImg from '@/assets/points.svg';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PetData } from '@/lib/types';
import { getTotalPoints as getTotalLevelExp } from '@/lib/utils';

const EXP_PROGRESS_STEP = 10;
const LEVEL_UPDATE_DELAY = 800;

export default function Pet({ data }: { data: PetData }) {
  const [experience, setExperience] = useState(data.exp);
  const [level, setLevel] = useState(data.level);

  const totalLevelExp = getTotalLevelExp(level, data.expStart);
  const progress = (experience / totalLevelExp) * 100;

  const { width, height } = useWindowSize();

  const [nextLevelAudio, , nextLevelControls] = useAudio({
    src: '/next-level.mp3',
  });
  const [cashAudio, , cashControls] = useAudio({
    src: '/cash.mp3',
  });

  const handleUpdateProgress = () => {
    cashControls.seek(0);
    cashControls.play();
    setExperience((prev) => prev + EXP_PROGRESS_STEP);
    setTimeout(() => {
      if (experience + EXP_PROGRESS_STEP >= totalLevelExp) {
        setLevel((prev) => prev + 1);
        setExperience(0);
        nextLevelControls.play();
      }
    }, LEVEL_UPDATE_DELAY);
  };

  return (
    <>
      {nextLevelAudio}
      {cashAudio}
      <div className="mb-8 mt-8 grid w-full justify-items-center gap-6">
        {progress === 0 && level > 1 && (
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={300}
            tweenDuration={1000}
          />
        )}
        <Image
          src="/zombie.svg"
          width={300}
          height={300}
          alt="Mascot"
          style={{
            scale: level / 10,
          }}
          className="transition-all"
        />
        <div className="grid w-[80%] justify-items-center">
          <h2 className="text-2xl font-extrabold">{data.name}</h2>
          <h3 className="text-lg font-extrabold text-indigo-500">
            LEVEL {level}
          </h3>
          <Progress className="my-4 h-6 w-full" value={progress} />
          <p className="upp text-center text-sm text-slate-500">
            Przekaż zdobytą energię aby zwiększyć poziom pupila.
          </p>
        </div>
        <Button onClick={handleUpdateProgress} disabled={progress === 100}>
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
