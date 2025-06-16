export interface SectionBtnInterface {
    content?: string | React.ReactNode;
    onClick?: () => void;
    children?: React.ReactNode;
    hgt?: number;
    wdt?: number;
    bgCustom?: string;
    showBorder?: boolean;
    px?: string | number;
    minW?: boolean;
    classCustom?: string;
    justifyPosition?: string;
}