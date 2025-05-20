import { useState } from "react";

interface SwitchProps {
  initialState?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  onChange?: (isActive: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  label?: string;
}

const Works = ({
   initialState = false,
  activeColor = 'bg-blue-500',
  inactiveColor = 'bg-gray-300',
  onChange,
  size = 'md',
  disabled = false,
  label,
}:SwitchProps ) => {
    const [isActive, setIsActive] = useState<boolean>(initialState);


  const handleToggle = () => {
    if (disabled) return;
    
    const newState = !isActive;
    setIsActive(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  const sizeClasses = {
    sm: {
      container: "w-10 h-10",
      button: "w-5 h-5",
    },
    md: {
      container: "w-14 h-14",
      button: "w-7 h-7",
    },
    lg: {
      container: "w-16 h-16",
      button: "w-8 h-8",
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
			 <div className="flex items-center">
      <button
        type="button"
        role="switch"
        aria-checked={isActive}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleToggle();
          }
        }}
        className={`
          relative ${sizeClasses[size].container} p-0 
          ${isActive ? activeColor : inactiveColor}
          transition-colors duration-200 ease-in-out
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
          shadow-md rounded-none
        `}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        <span 
          className={`
            absolute ${isActive ? 'right-1 top-1' : 'left-1 bottom-1'} 
            ${sizeClasses[size].button}
            bg-white shadow-sm
            transition-all duration-200 ease-in-out
            transform ${isActive ? 'rotate-45' : '-rotate-45'}
            origin-center
          `}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 60% 100%, 0 100%)'
          }}
        />
      </button>
      {label && (
        <label className="ml-3 text-sm font-medium text-gray-700 select-none">
          {label}
        </label>
      )}
    </div>
    </div>
  );
};

export default Works;
