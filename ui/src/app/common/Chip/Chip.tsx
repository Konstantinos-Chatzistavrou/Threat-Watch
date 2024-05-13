import { ChipProps } from "@common/Chip/ChipTypes";
import { IonLabel } from "@ionic/react";
import React from "react";

const Chip = ({
  content,
  backgroundColor = "",
  ionLabelProps = {},
  dataTestId,
}: ChipProps) => {
  return (
    <div
      style={{
        padding: "2px 4px",
        backgroundColor,
        borderRadius: "10px",
        border: "1px solid black",
        fontSize: "0.5rem",
      }}
      data-testid={dataTestId}
    >
      <IonLabel {...ionLabelProps}>{content}</IonLabel>
    </div>
  );
};

export default Chip;
