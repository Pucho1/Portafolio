import { useEffect,  useState } from "react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(  ScrollTrigger);

const useRowWorks = ( reverse? : boolean ) => {

	const [visibleCount, setVisibleCount] = useState(0);
	const [ progres, setProgres ] = useState<number>(0);


	useEffect(() => {

		ScrollTrigger.create({
			trigger: '.trigger',
			start: 	 'top bottom',
      		end: 	 'bottom top',
			onUpdate: (self) => setProgres( self.progress ),
			// markers: true,
		});
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		}
	}, []);


	/**
	 * Actualiza el número de columnas visibles según el ancho de la ventana.
	 */
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
		return reverse ? ( progres  * 10) - 10 : (-progres * 10) + 6.4;
	};

  return {
		visibleCount,
		progres,
		handleRowMovement,
  };
};

export default useRowWorks;
