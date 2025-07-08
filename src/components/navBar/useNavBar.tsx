import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import { usePositionStore } from "../../context/PositionContext";
import { useShowModalOpnet } from "../../context/ShowModalOpen";

const useNavBar = () => {

	const { setNavIsVisible }   = usePositionStore();
  const ref                   = useRef(null);
  const isInView              = useInView(ref);
  const { t }                 = useTranslation();
  const navigate              = useNavigate();
  const {isOpen, setIsOpen, setVisibleFloatBtn}   = useShowModalOpnet();


  const navLinks = [
    { name: t('PROJECTS'), href: '/projects' },
    { name: t('ABOUT_ME'), href: '/about' },
    { name: t('CONTACT'), href: '/contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // cleanup por si se desmonta
    };
  }, [isOpen]);

	useEffect(() => {
    setNavIsVisible(isInView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

	const toggleMenu = () => {
    setIsOpen(!isOpen);
    setVisibleFloatBtn(true);
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
