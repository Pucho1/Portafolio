import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );

const useAboutMe = () => {
  const sectionRef = useRef(null);
  const imageRevealRef = useRef(null);

  useEffect(() => {
		const section = sectionRef.current;
		const imageReveal = imageRevealRef.current;

		if (!section || !imageReveal) return;

		gsap.fromTo(
			imageReveal,
			{ backgroundPosition: 'center 0%' },
			{
				backgroundPosition: 'center 100%',
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach(trigger => {
				if (trigger.trigger === section) {
					trigger.kill();
				}
			});
		};
	}, []);


  return {
		sectionRef,
		imageRevealRef,
  }
}

export default useAboutMe