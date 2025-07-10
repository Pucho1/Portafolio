import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useFloatBtnStore } from "../context/FloatBtnContext";

gsap.registerPlugin(ScrollTrigger);

export default function useColitionDetector(
  {triguer , sectionId , buttonId } : {triguer: string, sectionId: string, buttonId: string}
){

  const { setShowBorder } = useFloatBtnStore();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: `.${triguer}`,
      start: "midle center", // cuando la parte superior de la sección entra desde abajo
      end: "bottom top",   // hasta que la parte inferior salga por arriba

      onUpdate: () => {
        const btn = document.querySelector(`#${buttonId}`); // id botón que quieres detectar
        const seccion = document.querySelector(`#${sectionId}`); // id sección que quieres detectar

        if (!btn || !seccion) return;

        const btnRect = btn.getBoundingClientRect();
        const seccionRect = seccion.getBoundingClientRect();

        const intersecta = !(
          btnRect.bottom < seccionRect.top ||
          btnRect.top > seccionRect.bottom ||
          btnRect.right < seccionRect.left ||
          btnRect.left > seccionRect.right
        );

        if (intersecta) {
          setShowBorder(true);
        } else  setShowBorder(false); 
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
