import { useMemo } from 'react';

import companies  from '../../../data/homeCompanies.json';


const useProyects = () => {

	const firstGroup = useMemo(() => companies.slice(0, 4), []);
	const secondGroup = useMemo(() => companies.slice(4, 8), []);

  return {
		firstGroup,
		secondGroup,
  };
};

export default useProyects;
