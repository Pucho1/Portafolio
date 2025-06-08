/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

import type { Position } from "../interfaces/contextInterfaces";


const defaultPosition: Position = {
  x: 0,
  y: 0,
  navIsVisible: false,
  setNavIsVisible: () => {},
  setPosition: () => {},
};

export const PositionContext =  createContext<Position>(defaultPosition);

export const PositionProvider = ({ children }: { children: React.ReactNode }) => {

  const [position, setPosition] = useState({ x: window.scrollX, y: window.scrollY });

  const [navIsVisible, setNavIsVisible] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   setPosition({ x: window.scrollX, y: window.scrollY });
  // };

  /**
   * * Intersection Observer API
   * * Detecta si un elemento está visible en la pantalla
   */
  
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       console.log('Está visible');
  //     }
  //   });
  // });

  // Observa el elemento con id 'mi-elemento'
  // Cambiar 'mi-elemento' por el id del elemento que quiero observar
  // observer.observe(document.getElementById('mi-elemento')!);

  return (
    <PositionContext.Provider value={{ ...position, navIsVisible, setNavIsVisible, setPosition }}>
      {children}
    </PositionContext.Provider>
  );
};

export function usePositionStore() {
  return useContext(PositionContext);
};
