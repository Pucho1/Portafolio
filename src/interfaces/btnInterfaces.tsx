export interface AnimatedButtonProps {
  content?: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  isHovered?: boolean;
  dotRef?: React.RefObject<HTMLDivElement>;
  containerRef?: React.RefObject<HTMLDivElement>;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

export interface MagneticBtnChildProps {
  wdt?: string | number;
  hgt?: string | number;
}
