import type { ReactElement } from "react";

export interface MagneticWraperInterface {
  showDot?: boolean;
  children: ReactElement;
  justifyPosition?: string;
  dotColor?: string;
}