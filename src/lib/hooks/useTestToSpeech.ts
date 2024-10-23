'use client';

import { useCallback, useEffect, useState } from 'react';

export function useTextToSpeech(language: string | null = 'pl-PL') {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const handleEnd = () => {
    setSpeaking(false);
  };

  const cancel = () => {
    if (!supported) return;
    setSpeaking(false);
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSupported(true);
    }
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!supported) return;
      setSpeaking(true);
      const utterance = new window.SpeechSynthesisUtterance();
      utterance.text = text;

      if (language !== null) {
        utterance.lang = language;
      }

      utterance.pitch = 0.6;
      utterance.rate = 1;
      utterance.onend = handleEnd;
      window.speechSynthesis.speak(utterance);
    },
    [language, supported],
  );

  return {
    supported,
    speak,
    speaking,
    cancel,
  };
}
