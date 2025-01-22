'use client';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getStoredPoints, persistPoints } from '@/lib/utils';

export interface PointsContextProps {
  points: number;
  addPoints: (points: number) => void;
  removePoints: (points: number) => void;
  updatePoints: (points: number) => void;
}

const PointsContext = createContext<PointsContextProps | null>(null);

export function PointsProvider({ children }: PropsWithChildren) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // Load points from local storage
    setPoints(getStoredPoints());
  }, []);

  useEffect(() => {
    // Persist points to local storage
    persistPoints(points);
  }, [points]);

  function addPoints(points: number) {
    setPoints((prev) => prev + points);
  }

  function removePoints(points: number) {
    setPoints((prev) => (prev < points ? 0 : prev - points));
  }

  function updatePoints(points: number) {
    setPoints(points);
  }

  return (
    <PointsContext.Provider
      value={{ points, updatePoints, addPoints, removePoints }}
    >
      {children}
    </PointsContext.Provider>
  );
}

export const usePoints = () => {
  const context = useContext(PointsContext);

  if (!context) {
    throw new Error('usePoints must be used within a PointsProvider');
  }

  return context;
};
