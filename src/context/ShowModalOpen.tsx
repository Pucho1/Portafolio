/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactElement } from 'react';
import { useState } from 'react';

type ShowModalOpenType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  visibleFloatBtn: boolean;
  setVisibleFloatBtn: (value: boolean) => void;
};

export const ShowModalOpen = createContext<ShowModalOpenType>({
  isOpen: false,
  setIsOpen: () => {},
  visibleFloatBtn: false,
  setVisibleFloatBtn: () => {},
});

export const ShowModalOpenProvider = ({ children }: {children: ReactElement}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visibleFloatBtn, setVisibleFloatBtn] = useState<boolean>(false);

  return (
    <ShowModalOpen.Provider
      value={{
      setIsOpen,
      isOpen,
      visibleFloatBtn,
      setVisibleFloatBtn,
    }}
    >
      {children}
    </ShowModalOpen.Provider>
  );
};


export function useShowModalOpnet() {
  return useContext(ShowModalOpen);
};

