import { useEffect, useState } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin( ScrollTrigger);

const useProyects = () => {

	const [changeDirection, setChangeDirection] = useState(false);

	useEffect(() => {
		ScrollTrigger.create({
			trigger: ".trigger",
			start: "top center",
			end: "+=500",
			onToggle: (self) => setChangeDirection(self.direction === 1)
		});
	}, []);
	

  return {
		changeDirection,
  };
};

export default useProyects;