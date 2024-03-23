import { IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import logo from "../../../assets/icons/i9ICnO01.svg";
import React from "react";

const Header: React.FC = () => (
  <IonHeader>
    <IonToolbar>
      <IonIcon
        aria-hidden="true"
        src={logo}
        size="large"
        style={{
          backgroundColor: "#4CA7BE",
          borderRadius: "4px",
        }}
      />
    </IonToolbar>
  </IonHeader>
);

export default Header;
