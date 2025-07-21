import { useShowModalOpnet } from "../../../context/ShowModalOpen";
import { useFloatBtnStore } from "../../../context/FloatBtnContext";
import { useLocation, useNavigate } from "react-router";


const useMobileBtn = (name: string) => {

	const navigate 				      = useNavigate();
	const { setIsOpen }  		    = useShowModalOpnet();
	const { setVisibleFloatBtn} = useFloatBtnStore();
	const { pathname }          = useLocation();

	const handleOnClik = (link: string) => {
		setIsOpen(false);
		setVisibleFloatBtn(false);
		setTimeout(() => {
			navigate(`${link}`, { viewTransition: true });	
		}, 750);
	};

	const showDotWhenIsInPage = (): boolean => {
		const fixedPath = pathname.split('/')[1];
		const lowerName = name.toLowerCase();
		return fixedPath === lowerName ?  true : false ; 
	};

  return {
		handleOnClik,
		showDotWhenIsInPage
  };
  
};

export default useMobileBtn;