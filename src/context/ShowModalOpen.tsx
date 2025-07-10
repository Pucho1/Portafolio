/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactElement, useState } from 'react';
import type { ShowModalOpenType } from '../interfaces/ShowModalContext';


export const ShowModalOpen = createContext<ShowModalOpenType>({
  isOpen: false,
  setIsOpen: () => {},

});

export const ShowModalOpenProvider = ({ children }: {children: ReactElement}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ShowModalOpen.Provider
      value={{
      setIsOpen,
      isOpen,
    }}
    >
      {children}
    </ShowModalOpen.Provider>
  );
};

export function useShowModalOpnet() {
  return useContext(ShowModalOpen);
};

