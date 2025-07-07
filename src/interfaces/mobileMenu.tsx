export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: navLikns[];
}

export interface navLikns {
  name: string; 
  href: string;
}