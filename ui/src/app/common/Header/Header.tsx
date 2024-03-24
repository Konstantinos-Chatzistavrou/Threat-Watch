import { IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import logo from "../../../assets/icons/tw-logo.svg";
import React from "react";

const Header: React.FC = () => (
  <IonHeader>
    <IonToolbar>
      <IonIcon
        className="xl"
        aria-hidden="true"
        src={logo}
        style={{
          borderRadius: "4px",
        }}
      />
    </IonToolbar>
  </IonHeader>
);

export default Header;
