import type { RowCardWorksProps } from "../../interfaces/companies";
import AnotherCard from "../cards/AnotherCard";
// import CardHomeMobile from "../cards/CardHomeMobile";

import useRowWorks from "./useRowWorks";

const RowCardWorks = ({ companies, reverse, className } :  RowCardWorksProps ) => {

  const { visibleCount, handleRowMovement } = useRowWorks(reverse);

  return (
    // to see whit oversize add w-120vw
    <div className={`${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 relative z-100`} 
      style={{ transform: `translateX(${handleRowMovement()}%)` }}
    >
			{companies.slice(0 , visibleCount ).map((company, index) => (
        <AnotherCard  
          key={index}
          companyName={company.companyName}
          position={company.rol}
          startYear={company.year}
          duration={company.year}
          description={company.description}
          logoUrl={company.logoUrl}
        />
			))}
		</div>
  );
};

export default RowCardWorks;
