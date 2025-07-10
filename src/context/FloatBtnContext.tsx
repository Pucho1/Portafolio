/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import type { FloatBtnType } from "../interfaces/contextInterfaces";

export const FloatBtnContext =  createContext<FloatBtnType>({
  visibleFloatBtn: false,
  setVisibleFloatBtn: () => {},
	showBorder: false,
	setShowBorder: () => {}
});

export const FloatBtnProvider = ({ children }: { children: ReactNode }) => {

  const [visibleFloatBtn, setVisibleFloatBtn] = useState<boolean>(false);
  const [showBorder, setShowBorder] = useState<boolean>(false);

  return (
    <FloatBtnContext.Provider value={{ visibleFloatBtn, setVisibleFloatBtn, showBorder, setShowBorder }}>
      {children}
    </FloatBtnContext.Provider>
  );
};

export function useFloatBtnStore() {
  return useContext(FloatBtnContext);
};
