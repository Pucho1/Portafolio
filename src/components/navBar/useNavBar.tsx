import { useEffect, useRef, useState } from "react";
import { usePositionStore } from "../../context/PositionContext";
import { useInView } from "framer-motion";

const useNavBar = () => {

	const { setNavIsVisible } = usePositionStore();
  const ref                 = useRef(null);
  const isInView            = useInView(ref);

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
  ];

	useEffect(() => {
    setNavIsVisible(isInView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

	const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

	const closeMenu = () => {
    setIsOpen(false);
  };


  return {
		navLinks,
		toggleMenu,
		closeMenu,
		isOpen,
		ref,
  };
};

export default useNavBar;
