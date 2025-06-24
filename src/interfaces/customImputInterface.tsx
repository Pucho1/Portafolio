import type { Control, FieldError } from "react-hook-form";

export interface CustomImportINterface {
    fieldNumber: number,
    customLabel: string,
    type: string,
    placeHolder?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>,
    name: string,
    error?: FieldError,
    showBorder?: boolean,
}