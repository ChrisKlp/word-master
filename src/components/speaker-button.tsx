'use client';

import { Pause, Volume2 } from 'lucide-react';

import { useTextToSpeech } from '@/lib/hooks/useTestToSpeech';

import { Button } from './ui/button';

type Props = {
  text: string;
  language?: string | null;
  size?: 'speaker' | 'speakerSmall';
};

export function SpeakerButton({ text, language, size = 'speaker' }: Props) {
  const { speak, speaking, cancel } = useTextToSpeech(language);

  const handleClick = () => {
    if (speaking) {
      cancel();
    } else {
      speak(text);
    }
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      variant={size === 'speaker' ? 'primary' : 'danger'}
      className="flex-shrink-0"
    >
      {speaking ? <Pause /> : <Volume2 />}
    </Button>
  );
}
