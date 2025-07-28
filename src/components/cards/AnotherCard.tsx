import React from 'react';

interface CompanyCardProps {
  companyName: string;
  position: string;
  startYear: string;
  description: string;
  logoUrl: string;
  duration?: string;
}

const AnotherCard: React.FC<CompanyCardProps> = ({
  companyName,
  position,
  startYear,
  description,
  logoUrl,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 max-w-sm mx-auto">
      {/* Avatar/Logo */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img
            src={logoUrl}
            alt={`${companyName} logo`}
            className="w-32 h-32 rounded-full  border-4 border-gray-100" //object-cover
          />
          <div className="absolute -bottom-2 -right-2 bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
            {startYear}
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="text-center space-y-3">
        <h3 className="text-xl font-bold text-gray-800 leading-tight h-25">
          {companyName}
        </h3>
        
        <div className="space-y-2">
          <p className="text-gray-600 font-semibold text-base uppercase tracking-wide">
            {position}
          </p>
          
          {/* {duration && (
            <p className="text-gray-500 text-base font-medium">
              {duration}
            </p>
          )} */}
        </div>

        <p className="text-gray-600 text-base leading-relaxed px-2 h-25">
          {description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-center">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnotherCard;