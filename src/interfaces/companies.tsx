export interface Companies {
  companyName: string;
  year?: string;
  category?: string;
  description: string;
  logoUrl: string;
  client?: string;
};

export interface CompaniesData extends Companies {
  bgColor?: string;
}

export interface RowCardWorksProps {
  companies: Companies[];
  reverse?: boolean;
} 