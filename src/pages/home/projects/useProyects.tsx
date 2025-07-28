import { useMemo } from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import companies from '../../../data/companies.json'
import useRandomNumber from '../../../utils/useRandomNumber';

const useProyects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const { ramdomNumber } = useRandomNumber();


  const handlerOnClik = () => navigate("/projects");

   useEffect(() => {
    const handlerResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handlerResize);
    return () => window.removeEventListener("resize", handlerResize);
  }, []);

	const firstGroup = useMemo(() => companies.slice(0, 4), []);
	const secondGroup = useMemo(() => companies.slice(4, 8), []);

  return {
		firstGroup,
		secondGroup,
		isMobile,
		handlerOnClik,
    ramdomNumber,
  };
};

export default useProyects;
