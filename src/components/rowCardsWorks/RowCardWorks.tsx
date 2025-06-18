import type { CompanyCardProps } from "../../interfaces/cardInterface"
import CompanyCard from "../CompanyCard"
import useRowWorks from "./useRowWorks";

const RowCardWorks = ({ companies, reverse } : { companies: CompanyCardProps[], reverse?: boolean }) => {

  const { visibleCount, handleRowMovement } = useRowWorks(reverse);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 -ml-10 mt-5"
      style={{ transform: `translateX(${handleRowMovement()}px)` }}
    >
			{companies.slice(0 , visibleCount ).map((company, index) => (
				<CompanyCard key={index} {...company} />
			))}
		</div>
  );
};

export default RowCardWorks;
