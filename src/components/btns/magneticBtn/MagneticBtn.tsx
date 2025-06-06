import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    if (!btnRef.current) return;

    const button = btnRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;

			handleMouseEnter();

      
      gsap.to(button, {
        x: relX * 0.3,
        y: relY * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {

      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });

			if (dotRef.current) {
				gsap.to(dotRef.current, {
					opacity: 0,
					scale: 0,
					duration: 0.2,
					ease: "power2.in"
				});
			}
				// // Reset button position
				// if (buttonRef.current) {
				// 	gsap.to(buttonRef.current, {
				// 		x: initialPosition.current.x,
				// 		y: initialPosition.current.y,
				// 		duration: 0.3,
				// 		ease: "power2.out"
				// 	});
				// }
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

	 const handleMouseEnter = () => {
    if (dotRef.current) {
      gsap.fromTo(
        dotRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  };


  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <button
        ref={btnRef}
        className="px-8 py-4 text-white bg-blue-600 rounded-2xl text-xl font-bold shadow-lg hover:bg-blue-500 transition-colors duration-200"
				// onMouseEnter={() => setIsHovered(true)}
				// onMouseLeave={() =>  setIsHovered(false)}
			>
        Magnético
      </button>
       <div
			 	ref={dotRef}
        className={`left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-300
                  opacity-0 transform-gpu`}
        // style={{
        // top: 'calc(100% + 15px)',
        // }}
      />
    </div>
  );
}
