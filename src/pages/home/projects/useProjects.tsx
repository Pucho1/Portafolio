import { useMemo } from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import companies from '../../../data/companies.json'
import useRandomNumber from '../../../utils/useRandomNumber';

const useProjects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const { randomNumber } = useRandomNumber();


  const handleClick = () => navigate("/projects");

   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	const firstGroup = useMemo(() => companies.slice(0, 4), []);
	const secondGroup = useMemo(() => companies.slice(4, 8), []);

  return {
		firstGroup,
		secondGroup,
		isMobile,
		handleClick,
    randomNumber,
  };
};

export default useProjects;
