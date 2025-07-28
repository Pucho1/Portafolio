import type { Companies } from "./companies";

export interface CompaniesData extends Companies {
  bgColor?: string;
};

export interface RowCardWorksProps {
  className?: string;
  companies: Companies[];
  reverse?: boolean;
};