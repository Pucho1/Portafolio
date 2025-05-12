import { useEffect, useState } from "react";

export const useVisibility = (ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
  
	const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options || { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};
