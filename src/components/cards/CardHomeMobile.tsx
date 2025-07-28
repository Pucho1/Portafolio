import type { CardHomeProps } from "../../interfaces/cards";
import EllipsisTooltipText from "../EllipsisTooltipText";

const CardHomeMobile = ({imageUrl, title, rol, year}: CardHomeProps ) => {
  return (
   <div className="bg-white transition-all duration-300 mx-auto my-5 p-3 max-w-100">
      {/* Image Section */}
      <div className="flex-shrink-0 p-4 mb-4 flex items-center justify-left h-70 w-full bg-gray-200">
				<img
						src={imageUrl}
						alt={`${title} logo`}
						className="max-h-full max-w-full object-cover w-100"
				/>
    	</div>

      {/* Content Section */}
      <div className="">
        {/* Title */}
        <h4 className="text-gray-900 mb-4 leading-tight max-w-80 text-[2em]">
          {<EllipsisTooltipText text={ title } textWidth={ 20 }/>}
        </h4>  
        
        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-4"></div>
        
        {/* Rol and Year */}
        <div className="flex justify-between">
          <p className="text-black text-[1em]">
            {rol}
          </p>
          <p className="text-black text-[1em]">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHomeMobile;


// src={"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2"}