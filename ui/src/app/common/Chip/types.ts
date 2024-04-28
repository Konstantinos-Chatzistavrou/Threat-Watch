import { ReactNode } from "react";

export interface IonLabelProps {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "medium"
    | "dark";
}

export interface ChipProps {
  backgroundColor?: string;
  content: ReactNode;
  ionLabelProps?: IonLabelProps;
  dataTestId?: string;
}
