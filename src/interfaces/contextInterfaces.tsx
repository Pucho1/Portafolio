export interface Position {
  x: number;
  y: number;
  navIsVisible: boolean;
  setNavIsVisible: (isVisible: boolean) => void;
  setPosition: (position: { x: number; y: number }) => void;
};

export interface FloatBtnType {
  visibleFloatBtn: boolean;
  setVisibleFloatBtn: (value: boolean) => void;
  showBorder: boolean;
  setShowBorder: (value: boolean) => void;
}