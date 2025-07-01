import type { RowCardWorksProps } from "../../interfaces/companies";

import CompanyCardHome from "../cards/CompanyCardHome"
import useRowWorks from "./useRowWorks";

const RowCardWorks = ({ companies, reverse } :  RowCardWorksProps ) => {

  const { visibleCount, handleRowMovement } = useRowWorks(reverse);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 relative"
      style={{ transform: `translateX(${handleRowMovement()}px)` }}
    >
			{companies.slice(0 , visibleCount ).map((company, index) => (
				<CompanyCardHome key={index} {...company} />
			))}
		</div>
  );
};

export default RowCardWorks;
