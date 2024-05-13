export interface IonButtonProps {
  size?: "large" | "small";
  shape?: "round";
  onClick?: (e: any) => void;
  id?: string;
}

export interface IonIconProps {
  icon?: string;
  size?: "small" | "large";
  ariaHidden?: boolean;
  color?: string;
}

export interface ButtonProps {
  type: "icon" | "button";
  ariaLabel: string;
  dataTestId?: string;
  classes?: string;
  ionButtonProps?: IonButtonProps;
  ionIconProps?: IonIconProps;
}
