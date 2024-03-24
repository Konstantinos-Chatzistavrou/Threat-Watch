import React, { ReactNode } from "react";
import { IonButton, IonIcon } from "@ionic/react";

interface ButtonProps {
  type: ButtonType;
  ariaLabel: string;
  ariaHidden?: boolean;
  size?: string;
  classes?: string;
  icon?: string;
}

type ButtonType = "icon";

const Button = ({
  type,
  ariaLabel,
  ariaHidden = true,
  size = "large",
  classes,
  icon,
}: ButtonProps) => {
  let buttonContents: ReactNode;

  if (type === "icon") {
    buttonContents = (
      <IonIcon
        slot={"icon-only"}
        size={size}
        aria-hidden={ariaHidden}
        icon={icon}
      />
    );
  }

  return (
    <IonButton
      className={`ion-no-padding ${classes || ""}`}
      aria-label={ariaLabel}
    >
      {buttonContents}
    </IonButton>
  );
};

export default Button;
