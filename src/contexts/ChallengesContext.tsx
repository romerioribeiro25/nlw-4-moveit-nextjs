import { createContext, useState, ReactNode } from 'react';

interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface IChallegesProviderProps {
  children: ReactNode;
}

export const ChallegesContext = createContext({} as IChallengesContextData);

export function ChallegesProvider({ children }: IChallegesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    alert('startNewChallenge');
  }

  return (
    <ChallegesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallegesContext.Provider>
  );
}
