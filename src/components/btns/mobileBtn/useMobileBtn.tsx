import { useShowModalOpnet } from "../../../context/ShowModalOpen";
import { useFloatBtnStore } from "../../../context/FloatBtnContext";
import { useNavigate } from "react-router";
import useClearPath from "../../../utils/useClearPath";


const useMobileBtn = (name: string) => {

	console.log('name --->',name)

	const navigate 				= useNavigate();
	const { setIsOpen }  		= useShowModalOpnet();
	const { setVisibleFloatBtn} = useFloatBtnStore();
	const { clearPath }         = useClearPath()

	const handleOnClik = (link: string) => {
		setIsOpen(false);
		setVisibleFloatBtn(false);
		setTimeout(() => {
			navigate(`${link}`, { viewTransition: true });	
		}, 750);
	};

	const showDotWhenIsInPage = (): boolean => {
		// const fixedPath = pathname.split('/')[1];
		console.log(clearPath)
		const lowerName = name.toLowerCase();
		return clearPath === lowerName ?  true : false ; 
	};

  return {
		handleOnClik,
		showDotWhenIsInPage
  };
  
};

export default useMobileBtn;