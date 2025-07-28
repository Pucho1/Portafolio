import type { TooltipProps } from "@mui/material/Tooltip";

export interface Companies {
  companyName: string;
  year: string;
  category?: string;
  description: string;
  logoUrl: string;
  client?: string;
  src?: string;
  rol: string;
};

export interface CompaniesData extends Companies {
  bgColor?: string;
};

export interface RowCardWorksProps {
  className?: string;
  companies: Companies[];
  reverse?: boolean;
};

export interface customToolTipsProps extends TooltipProps {
  show?: boolean;
};