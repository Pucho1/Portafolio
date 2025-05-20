import { useEffect, useRef, useState } from 'react'

const useHero = () => {

	const texts = [
    "Software Engineer",
    "Frontend Developer",
  ];

	const marqueeRef = useRef(null);
  const [direction, setDirection] = useState("left");
  const lastScrollY = useRef(0);

	useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setDirection("left");
      } else {
        setDirection("right");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
	return {
		marqueeRef,
		direction,
		lastScrollY,
		texts,
	};
};

export default useHero