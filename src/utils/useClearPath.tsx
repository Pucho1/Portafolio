import { useLocation, type Location } from "react-router";

const useClearPath = (): { clearPath: string, location: Location} => {

	const location = useLocation();


	const currentPath = location.pathname.split('/');
	console.log(currentPath)

	const clearPath = currentPath[currentPath.length - 1];


  return {
		clearPath : clearPath.length > 0 ? clearPath : 'Home',
		location,
	};
};

export default useClearPath;
