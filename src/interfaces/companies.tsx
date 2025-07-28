import type { TooltipProps } from "@mui/material/Tooltip";

export interface Companies {
  companyName: string;
  year: string;
  category?: string;
  description: string;
  logoUrl?: string;
  client?: string;
  src?: string;
  rol: string;
  imgUrls?: string[]
};

export interface CardWithImgChangin extends Companies{
  changeTimer: number;
}


export interface customToolTipsProps extends TooltipProps {
  show?: boolean;
};