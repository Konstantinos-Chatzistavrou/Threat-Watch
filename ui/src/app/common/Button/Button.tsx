import React, { ReactNode } from "react";
import { IonButton, IonIcon } from "@ionic/react";

interface IonButtonProps {
  size?: "large" | "small";
  shape?: "round";
  onClick?: (e: any) => void;
  id?: string;
}

interface IonIconProps {
  icon?: string;
  size?: "small" | "large";
  ariaHidden?: boolean;
  color?: string;
}

interface ButtonProps {
  type: "icon";
  ariaLabel: string;
  classes?: string;
  ionButtonProps?: IonButtonProps;
  ionIconProps?: IonIconProps;
}

const Button = ({
  type,
  ariaLabel,
  classes,
  ionIconProps = { ariaHidden: true },
  ionButtonProps = {},
}: ButtonProps) => {
  let buttonContents: ReactNode;

  if (type === "icon") {
    const { ariaHidden, color, ...rest } = ionIconProps;
    const style = { style: { color } };
    buttonContents = (
      <IonIcon
        slot={"icon-only"}
        aria-hidden={ariaHidden}
        {...rest}
        style={{ color }}
      />
    );
  }

  return (
    <IonButton
      className={`ion-no-padding ${classes || ""}`}
      aria-label={ariaLabel}
      {...ionButtonProps}
    >
      {buttonContents}
    </IonButton>
  );
};

export default Button;
