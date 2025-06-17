import { useEffect,  useState } from "react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(  ScrollTrigger);

const useMovement = () => {
	const [changevisibleCount, setChangevisibleCount] 				= useState(0);
	const [ progres, setProgres ] 								= useState<number>(0);
	// const [ changeDirection, setChangeDirection ] = useState(false);
  
	useEffect(() => {
		ScrollTrigger.create({
			trigger: '.trigger', // clase a la cual se le aplica la animacion
			start: 'top bottom', // donde empieza 
      end: 'bottom top', // donde termina 
			// onToggle: (self) => setChangeDirection(self.direction === 1), // para campbiar algo enm funcion de la direccion del scrollS
			onUpdate: (self) => setProgres( self.progress ),
		});
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		}
	}, []);

	/**
	 * Actualiza la cantidad de filas que se pueden ver en un grid dinamicamente
	 */
	const updateVisibleColums = () => {
		const width = window.innerWidth;

		let columns = 2;
		if (width >= 1024) columns = 4; // lg
		else if (width >= 640) columns = 3; // sm

		setChangevisibleCount(columns); // Muestra una fila de items como máximo
	};

	useEffect(() => {
		updateVisibleColums();

		window.addEventListener("resize", updateVisibleColums);

		return () => window.removeEventListener("resize", updateVisibleColums);
	}, []);



	const handleRowMovement = (): number => {
		return progres * 300
	};

  return {
		changevisibleCount,
		progres,
		// changeDirection,
		handleRowMovement,
  };
};

export default useMovement;
