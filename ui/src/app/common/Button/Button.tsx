import React, { ReactNode } from "react";
import { IonButton, IonIcon } from "@ionic/react";

interface IonButtonProps {
  size?: "large" | "small";
  shape?: "round";
}

interface IonIconProps {
  icon?: string;
  iconSize?: "small" | "large";
  ariaHidden?: boolean;
}

interface ButtonProps extends IonButtonProps, IonIconProps {
  type: "icon";
  ariaLabel: string;
  classes?: string;
}

const Button = ({
  type,
  ariaLabel,
  ariaHidden = true,
  iconSize,
  classes,
  icon,
  ...rest
}: ButtonProps) => {
  let buttonContents: ReactNode;

  if (type === "icon") {
    buttonContents = (
      <IonIcon
        slot={"icon-only"}
        size={iconSize}
        aria-hidden={ariaHidden}
        icon={icon}
      />
    );
  }

  return (
    <IonButton
      className={`ion-no-padding ${classes || ""}`}
      aria-label={ariaLabel}
      {...rest}
    >
      {buttonContents}
    </IonButton>
  );
};

export default Button;
