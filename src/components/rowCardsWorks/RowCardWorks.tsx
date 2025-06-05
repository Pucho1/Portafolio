import {  useState, useEffect } from "react";
import type { CompanyCardProps } from "../../interfaces/cardInterface"
import CompanyCard from "../CompanyCard"

const RowCardWorks = ({ companies } : { companies: CompanyCardProps[] }) => {

	const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {

    const updateVisibleCount = () => {
      const width = window.innerWidth;

      let columns = 2;
      if (width >= 1024) columns = 4; // lg
      else if (width >= 640) columns = 3; // sm

      setVisibleCount(columns); // Muestra una fila de items como máximo
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="w-[110vw] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 -ml-10">

			{companies.slice(0 , visibleCount ).map((company, index) => (
					<CompanyCard key={index} {...company} />
			))}
		</div>
  );
};

export default RowCardWorks;
