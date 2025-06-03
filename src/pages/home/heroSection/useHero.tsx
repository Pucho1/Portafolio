import { useEffect, useRef, useState } from 'react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';

// gsap.registerPlugin( ScrollTrigger); // Register GSAP plugins


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

      // ScrollTrigger.create({
      //   trigger: ".trigger",
      //   start: "top center",
      //   end: "+=500",
      //   onToggle: (self) => console.log("toggled. active?", self.isActive),
      // });

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