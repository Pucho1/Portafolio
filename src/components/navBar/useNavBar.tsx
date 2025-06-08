import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import { usePositionStore } from "../../context/PositionContext";

const useNavBar = () => {

	const { setNavIsVisible } = usePositionStore();
  const ref                 = useRef(null);
  const isInView            = useInView(ref);
  const { t }               = useTranslation();
  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('PROJECTS'), href: '#projects' },
    { name: t('RESUME'), href: '/about' },
    { name: t('SKILLS'), href: '#skills' },
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

  const handleOnClik = (link: string) =>  navigate(`${link}`);


  return {
		navLinks,
    handleOnClik,
		toggleMenu,
		closeMenu,
		isOpen,
		ref,
  };
};

export default useNavBar;
