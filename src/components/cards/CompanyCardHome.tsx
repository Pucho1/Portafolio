import { useRef } from 'react';

import type { CompanyCardProps } from '../../interfaces/cardInterface';

const CompanyCardHome = ({ logoUrl, companyName, description } : CompanyCardProps) => {

  const cardRef = useRef(null);

  return (
    <div 
      className="group p-6 relative overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      ref={cardRef}
    >
        <div className="p-2  flex flex-col h-full  bg-white ">

          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{companyName}</h3>
            {description && (
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 w-2/3">{description}</p>
            )}
          </div>

          <div className="flex-shrink-0 p-4 mb-4 flex items-center justify-left h-24 w-full">
            <img
              src={logoUrl}
              alt={`${companyName} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </div>
  );
};

export default CompanyCardHome;
