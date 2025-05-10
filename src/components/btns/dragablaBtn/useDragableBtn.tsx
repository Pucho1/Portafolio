import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const useDragableBtn = () => {

	const buttonRef = useRef<HTMLButtonElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialPosition = useRef({ x: 0, y: 0 });

  
  useEffect(() => {
    if (!buttonRef.current || !containerRef.current) return;

    const button = buttonRef.current;
    const container = containerRef.current;
    const bounds = { x: 20, y: 20 }; // Maximum movement range in pixels

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
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

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Reset position when unmounting or when hover ends
      gsap.to(button, {
        x: initialPosition.current.x,
        y: initialPosition.current.y,
        duration: 0.3,
        ease: "power2.out"
      });
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (dotRef.current) {
      gsap.fromTo(
        dotRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (dotRef.current) {
      gsap.to(dotRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    }
    // Reset button position
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        x: initialPosition.current.x,
        y: initialPosition.current.y,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };


  return {
		handleMouseLeave,
		handleMouseEnter,
		initialPosition,
		buttonRef,
		containerRef,
		dotRef, 
		isHovered
  };
};

export default useDragableBtn;