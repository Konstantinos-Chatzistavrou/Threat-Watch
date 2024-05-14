import { ChipProps } from "@common/Chip/ChipTypes";
import { IonIcon, IonLabel, IonRow } from "@ionic/react";
import React from "react";

const Chip = ({
  content,
  backgroundColor,
  ionLabelProps = {},
  dataTestId,
  icon,
}: ChipProps) => {
  return (
    <IonRow
      style={{
        padding: "2px 4px",
        backgroundColor,
        borderRadius: "10px",
        border: "1px solid black",
        fontSize: "0.5rem",
      }}
      data-testid={dataTestId}
      class={"ion-align-items-center"}
    >
      {icon ? (
        <IonIcon icon={icon} style={{ padding: "0 2px 0 0" }} />
      ) : undefined}
      <IonLabel {...ionLabelProps}>{content}</IonLabel>
    </IonRow>
  );
};

export default Chip;
