import React from "react";
import { X, Home, ShoppingBag, Heart } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col  p-6 pb-0 border-b border-gray-200">
          <div className="flex w-full justify-end">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex w-full ustify-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 pl-3">
              Navegación
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Section 1: Navigation */}
          <div className="p-6 border-b border-gray-100">
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Home className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Inicio</span>
              </button>

              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <ShoppingBag className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Productos</span>
              </button>

              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="text-gray-700 font-medium">Favoritos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
