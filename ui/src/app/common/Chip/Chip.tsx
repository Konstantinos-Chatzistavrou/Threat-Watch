import React, { ReactNode } from "react";
import { IonLabel } from "@ionic/react";

interface IonLabelProps {
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

interface ChipProps {
  backgroundColor?: string;
  content: ReactNode;
  ionLabelProps?: IonLabelProps;
}

const Chip = ({
  content,
  backgroundColor = "",
  ionLabelProps = {},
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
    >
      <IonLabel {...ionLabelProps}>{content}</IonLabel>
    </div>
  );
};

export default Chip;
