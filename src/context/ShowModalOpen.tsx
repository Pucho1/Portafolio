/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactElement, useState } from "react";
import type { ShowModalOpenValues } from "../interfaces/showModalInterface";

export const ShowModalOpen = createContext<ShowModalOpenValues>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ShowModalOpenProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
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
}
