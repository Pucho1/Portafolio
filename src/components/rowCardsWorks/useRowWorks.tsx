import { useEffect,  useState } from "react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(  ScrollTrigger);

const useRowWorks = ( reverse? : boolean ) => {

	const [visibleCount, setVisibleCount] = useState(0);
	const [ changeDirection, setChangeDirection ] = useState(false);
	const [ progres, setProgres ] = useState<number>(0);

	useEffect(() => {

		ScrollTrigger.create({
			trigger: '.trigger',
			start: 'top bottom',
      end: 'bottom top',
			onToggle: (self) => setChangeDirection(self.direction === 1),
			onUpdate: (self) => setProgres( self.progress ),
		});
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		}
	}, []);


	useEffect(() => {
		const updateVisibleCount = () => {
		const width = window.innerWidth;

		let columns = 2;
		if (width >= 1024) columns = 4; // lg
		else if (width >= 640) columns = 3; // sm

		setVisibleCount(columns); // Muestra una fila de items como máximo
	};

	updateVisibleCount();
	window.addEventListener("resize", updateVisibleCount);
	return () => window.removeEventListener("resize", updateVisibleCount);
	}, []);

	const handleRowMovement = (): number => {
		if (reverse) {
		return changeDirection ? -progres * 100 : progres * 100;
		}
		return changeDirection ? progres * 100 : -progres * 100;
	};

  return {
		visibleCount,
		progres,
		changeDirection,
		handleRowMovement,
  };
};

export default useRowWorks;
