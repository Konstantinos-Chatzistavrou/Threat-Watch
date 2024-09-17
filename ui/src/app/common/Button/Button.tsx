import { ButtonProps } from "@common/Button/ButtonTypes";
import { IonButton, IonIcon } from "@ionic/react";
import React, { PropsWithChildren, ReactNode } from "react";

const Button = ({
  type,
  ariaLabel,
  dataTestId,
  classes,
  ionIconProps = { ariaHidden: true },
  ionButtonProps = {},
  children,
}: PropsWithChildren<ButtonProps>) => {
  let buttonContents: ReactNode = <>{children}</>;

  if (type === "icon") {
    const { ariaHidden, color, ...rest } = ionIconProps;
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
      data-testid={dataTestId}
      {...ionButtonProps}
    >
      {buttonContents}
    </IonButton>
  );
};

export default Button;
