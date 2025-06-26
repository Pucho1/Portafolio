import { Building, Calendar } from "lucide-react";
import type { CompaniesData } from "../../interfaces/companies";

const CompanyCard = ({ logoUrl, companyName, client, year, category } : CompaniesData) => {


  return (
   <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 relative">
      {/* Large Image */}
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        {logoUrl.startsWith('public') ? (
          <img
            src={logoUrl}
            alt={`${client} logo`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling!.classList.remove('hidden');
            }}
          />
        ) : null}
        <Building className={`w-12 h-12 text-gray-400 ${logoUrl.startsWith('public') ? 'hidden' : ''}`} />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 text-lg mb-1">
            {client}
          </h3>
          <p className="text-sm text-gray-600">
            {companyName}
          </p>
        </div>

        {/* HR */}
        <hr className="border-gray-200 mb-4" />

        {/* Role and Date on same level */}
        <div className="flex items-center justify-between">
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {year}
          </div>
        </div>
      </div>

      {/* Bottom hover bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default CompanyCard;
