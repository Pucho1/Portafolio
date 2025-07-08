import { createContext, type ReactElement } from 'react';
import { useState } from 'react';

type TransitionContextType = {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  completed: false,
  toggleCompleted: () => {},
});

export const TransitionProvider = ({ children }: {children: ReactElement}) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const toggleCompleted = (value: boolean): void => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{ toggleCompleted, completed }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
