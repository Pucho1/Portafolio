import { useLocation } from "react-router";
import { useEffect, useRef } from "react";


import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollSmoother, useGSAP, ScrollTrigger);


const useApp = () => {

  const location = useLocation();
  const visitedRoutesRef = useRef(new Set()); // Track visited routes /* Set()--> help me to not repeat the same route
  const isVisited = useRef(false); // Track if the current route has been visited

  useEffect(() => {
    visitedRoutesRef.current.add(location.pathname);
    isVisited.current = hasVisited(); // Check if the current route has been visited
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const hasVisited = () => visitedRoutesRef.current.has(location.pathname);

  // Animations variants of entry and out of the page content 
  const pageContentVariants = {
    initial: { opacity: 0, y: 20 }, // initial state (cuando entra)
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Animations state (cuando está visible)
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } } // State out (cuando se va)
  };

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1, // how long it takes to smooth the scroll
      effects: true, // enable effects like pinning and parallax
    });

    return () => {
      ScrollSmoother.get()?.kill(); // Cleanup on unmount
    };
  }, [location]); // Recreate the ScrollSmoother on location change



  return{
		pageContentVariants,
		location,
		isVisited,
  };
};

export default useApp;
