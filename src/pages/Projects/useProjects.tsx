import { useState } from "react";
import companies from "../../data/companies.json";
import type { Companies } from "../../interfaces/companies";


const useProjects = () => {
	const [activeYear, setActiveYear] = useState('all');

	const years = ['all','17/19', '20/21', '21/22', '22/25'];

	const filteredCompanies = companies
		.filter((company) => activeYear === 'all' ? true : company.year === activeYear)
		.map((company) => ({
			...company,
			category: company.category as "frontend" | "backend" | "tools"
		})) as Companies[];

  return {
		years,
		activeYear,
		setActiveYear,
		filteredCompanies
  };
};

export default useProjects;
