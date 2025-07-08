import { useNavigate } from "react-router";
import type { navLikns } from "../../../interfaces/mobileMenu";
import MagneticBtn from "../magneticBtn/MagneticBtn";

import './btnMobileLink.css';
import { useShowModalOpnet } from "../../../context/ShowModalOpen";

const MobileBtn = ({ name, href } : navLikns) => {

	const navigate = useNavigate();
	const { setIsOpen, setVisibleFloatBtn}  = useShowModalOpnet();

	const handleOnClik = (link: string) => {
		setIsOpen(false);
		setVisibleFloatBtn(false);
		setTimeout(() => {
			navigate(`${link}`);	
		}, 300);
	};

  return (
		<MagneticBtn>
			<button 
				className="btn_mobile_link w-full flex items-center p-3 rounded-lg hover:cursor-pointer transition-colors duration-200"
				onClick={ () => handleOnClik(href) }
			>
				<span className="text-gray-200 text-5xl">{name}</span>
			</button>
		</MagneticBtn>
  );
};

export default MobileBtn;
