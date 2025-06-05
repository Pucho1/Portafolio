import {  useEffect, useMemo, useState } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';


const companies = [
	{
		logoUrl: 'public/imgs/markas33.jpg',
		companyName: "Mark'As",
		description: 'Desarrollo de aplicaciones web y móviles para grandes empresas.',
	},
	{
		logoUrl: "public/imgs/El_País_logo.svg.png",
		companyName: 'El pais',
		description: 'Rediseño completo de la presencia digital para esta empresa internacional.',
	},
	{
		logoUrl: "public/imgs/Cinco_Días_logo.svg.png",
		companyName: 'Cinco dias',
		description: 'Aplicación móvil innovadora para gestión de recursos humanos.',
	},
	{
		logoUrl: 'public/imgs/markas33.jpg',
		companyName: "Mark'As",
		description: 'Desarrollo de aplicaciones web y móviles para grandes empresas.',
	},
	{
		logoUrl: "public/imgs/El_País_logo.svg.png",
		companyName: 'El pais',
		description: 'Rediseño completo de la presencia digital para esta empresa internacional.',
	},
	{
		logoUrl: "public/imgs/Cinco_Días_logo.svg.png",
		companyName: 'Cinco dias',
		description: 'Aplicación móvil innovadora para gestión de recursos humanos.',
	},
	{
		logoUrl: "public/imgs/Cinco_Días_logo.svg.png",
		companyName: 'Cinco dias',
		description: 'Aplicación móvil innovadora para gestión de recursos humanos.',
	},
	{
		logoUrl: 'public/imgs/markas33.jpg',
		companyName: "Mark'As",
		description: 'Desarrollo de aplicaciones web y móviles para grandes empresas.',
	},
];



const useProyects = () => {
	const [ changeDirection, setChangeDirection ] = useState(false);

	const [ progres, setProgres ] = useState<number>(0);

	const firstGroup = useMemo(() => companies.slice(0, 4), []);
	const secondGroup = useMemo(() => companies.slice(4, 8), []);

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

  return {
		changeDirection,
		progres,
		firstGroup,
		secondGroup,
  };
};

export default useProyects;
