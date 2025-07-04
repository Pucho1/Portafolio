
import { cloneElement, useEffect, useRef, type ReactElement } from "react";

import { gsap } from 'gsap';
import { useLocation } from 'react-router';

import type { boundsType } from "../../../interfaces/boundsInterface";

const useMagneticBtn = ( children: ReactElement ) => {
	const buttonRef       = useRef<HTMLButtonElement>(null);
  const dotRef          = useRef<HTMLDivElement>(null);
  const containerRef    = useRef<HTMLDivElement>(null);
	const initialPosition = useRef({ x: 0, y: 0 });
	const isGrandSon 			= useRef(false);
	const { pathname }    = useLocation();


  // Clono el hijo y le paso la ref
  const childWithRef = cloneElement(children, { ref: buttonRef });

  const  { children: grandson } = childWithRef.props;

	/**
	 * @returns El nieto del componente si es un string o vacio.
	 */
	const handlerClearedGrandson = (): string => {
		return Array.isArray(grandson)
			? (typeof grandson[0] === "string" ? grandson[0] : "")
			: (typeof grandson === "string" ? grandson : "");
	};


	/**
	 * Manejo cuando es un hijo y cuando no, y si lo es llamo show Dot y no permito que se quite.
	 */
	const handleIsGrandSon = (): void => {
		const currentPath = pathname.split('/')[1];
		const clearedGrandson = handlerClearedGrandson();

		if(currentPath.toLowerCase() === clearedGrandson.toLowerCase()) {
			isGrandSon.current = true;
			showDot();
		};
	};


  useEffect(() => {
    if (!buttonRef.current || !containerRef.current) return;

    const button    = buttonRef.current; // Gets the button element for handler the btn movement
    const container = containerRef.current; //Gets the container element for triggering mouse events
    const bounds    = { x: 10, y: 10 }; // Maximum movement range in pixels

		handleIsGrandSon();

    const handleMouseMove = (e: MouseEvent) =>{
      mouseMove(e, button, bounds);
    };

    const handleMouseLeave = () =>{
      mouseLeave( button);
    };

    const handleMouseEnter = () => {
     showDot();
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseenter", handleMouseEnter);   

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);   
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * @param e MouseEvent
   * @param button HTMLButtonElement
   * @param bounds boundsType
   * Handles the mouse movement over the button, calculating the relative position
   */
  const mouseMove = (e: MouseEvent, button: HTMLButtonElement, bounds: boundsType) => {

    const rect   = button.getBoundingClientRect(); // Devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización
    const deltaX = e.clientX - rect.left - rect.width / 2; // Calcula la posición horizontal relativa del mouse respecto al centro del botón
    const deltaY = e.clientY - rect.top - rect.height / 2; // Calcula la posición vertical relativa del mouse respecto al centro del botón

    // Limit movement to 20px range
    const moveX = Math.max(-bounds.x, Math.min(bounds.x, deltaX / 2));
    const moveY = Math.max(-bounds.y, Math.min(bounds.y, deltaY / 2));

    gsap.to(button, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  /**
   * @param button HTMLButtonElement
   * Handles the mouse leave event, resetting the button position and hiding the dot
   */
  const mouseLeave = (button: HTMLButtonElement) => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });

    if (dotRef.current && !isGrandSon.current) {
      gsap.to(dotRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    };
  };

  /**
   * Displays the dot with a scaling animation when the mouse enters the button area
   */
  const showDot = () => {
    if (dotRef.current  ) {
      gsap.fromTo(
        dotRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    };
  };

  return {
		initialPosition,
		buttonRef,
		containerRef,
		dotRef,
    childWithRef,
  };
};

export default useMagneticBtn;
