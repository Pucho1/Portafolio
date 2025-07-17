import { useLocation, useNavigate } from "react-router";

import type { navLikns } from "../../../interfaces/mobileMenu";
import MagneticBtn from "../magneticBtn/MagneticBtn";
import { useShowModalOpnet } from "../../../context/ShowModalOpen";
import { useFloatBtnStore } from "../../../context/FloatBtnContext";

import './btnMobileLink.css';

const MobileBtn = ({ name, href } : navLikns) => {

	// gestionar vuando se muestra o no el punto por el path name 
	// poner y quitar una clase que me cambie la opacidad del punto 

	const navigate 				= useNavigate();
	const { setIsOpen }  		= useShowModalOpnet();
	const { setVisibleFloatBtn} = useFloatBtnStore();

	const { pathname }          = useLocation();

	const handleOnClik = (link: string) => {
		setIsOpen(false);
		setVisibleFloatBtn(false);
		setTimeout(() => {
			navigate(`${link}`);	
		}, 750);
	};

	const showDotWhenIsInPage = (): boolean => {
		const fixedPath = pathname.split('/')[1];
		const lowerName = name.toLowerCase();
		
		console.log(fixedPath, lowerName)
		return fixedPath === lowerName ?  true : false ; 
	};

  return (
		<MagneticBtn>
			<div className="relative">
				<button 
					className={`btn_mobile_link w-full flex items-center p-3 rounded-lg hover:cursor-pointer 
						transition-colors duration-200 `}
					onClick={ () => handleOnClik(href) }
				>
					<span className="text-gray-200 text-5xl">{name}</span>
				</button>
				<div 
					className={`doth absolute w-[10px] h-[10px] bg-white rounded-full -left-3 bottom-[30px]`}
					style={{ opacity:showDotWhenIsInPage() ? 1 : 0 }}
				>
				</div>
			</div>
		</MagneticBtn>
  );
};

export default MobileBtn;
