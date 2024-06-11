import gridLockImage from "@assets/grid-lock.jpeg";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonRow,
  IonText,
} from "@ionic/react";
import { timeSharp } from "ionicons/icons";
import React from "react";

interface ListCardProps {
  title: string;
  date: string;
}

const ListCard = ({ title, date }: ListCardProps) => {
  return (
    <IonCard
      className={"ion-no-margin"}
      style={{
        width: "100%",
        border: "1px solid black",
      }}
    >
      <IonRow className={"ion-justify-content-between ion-padding"}>
        <div style={{ transform: "scale(1,1)" }}>
          <IonCardHeader className={"ion-no-padding"}>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent
            className={"ion-no-padding"}
            style={{
              position: "fixed",
              bottom: 0,
            }}
          >
            <IonRow className={"ion-align-items-center"}>
              <IonIcon icon={timeSharp} style={{ padding: "0 2px 0 0" }} />
              <IonText color={"medium"}>
                {new Date(date).toLocaleDateString()}
              </IonText>
            </IonRow>
          </IonCardContent>
        </div>

        <img
          alt={"alt"}
          src={gridLockImage}
          style={{
            width: "120px",
            maxHeight: "103px",
          }}
        />
      </IonRow>
    </IonCard>
  );
};

export default ListCard;
