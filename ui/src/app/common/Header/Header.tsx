import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import logo from "@assets/icons/tw-logo.svg";
import React, { PropsWithChildren } from "react";

interface HeaderProps {
  title?: string;
}

const Header = ({ title, children }: PropsWithChildren<HeaderProps>) => (
  <IonHeader>
    <IonToolbar>
      <IonGrid>
        <IonRow class={"ion-align-items-center"}>
          <IonCol>
            <IonIcon className="xl" aria-hidden="true" src={logo} />
          </IonCol>
          <IonCol>{title && <IonTitle>{title}</IonTitle>}</IonCol>
          <IonCol>{children}</IonCol>
        </IonRow>
      </IonGrid>
    </IonToolbar>
  </IonHeader>
);

export default Header;
