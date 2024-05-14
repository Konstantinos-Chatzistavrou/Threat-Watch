import { Button } from "@common/Button";
import { Chip } from "@common/Chip";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonRow,
} from "@ionic/react";
import { star } from "ionicons/icons";
import React from "react";

interface InfoCardProps {
  id: number;
  title: string;
  handleFavorite: () => void;
  isFavorite: boolean;
  chipLabel: string;
  chipIcon?: string;
  cardImg: string;
  cardImgAlt: string;
  testId: string;
  cardMaxWidth?: string;
  imgWidth?: string;
  imgMaxHeight?: string;
  classes?: string;
}

const InfoCard = ({
  id,
  title,
  handleFavorite,
  isFavorite,
  chipLabel,
  cardImg,
  cardImgAlt,
  testId,
  cardMaxWidth,
  imgWidth,
  imgMaxHeight,
  chipIcon,
  classes,
}: InfoCardProps) => {
  return (
    <IonCard
      className={`ion-no-margin ${classes}`}
      style={{
        maxWidth: cardMaxWidth,
      }}
      data-testid={testId}
    >
      <IonRow>
        <img
          alt={cardImgAlt}
          src={cardImg}
          style={{
            width: imgWidth,
            maxHeight: imgMaxHeight,
            objectFit: "none",
          }}
        />
        <div
          style={{
            position: "fixed",
            bottom: "2.5rem",
            left: "0.2rem",
          }}
        >
          <Chip
            content={chipLabel}
            backgroundColor={"#59BE3B"}
            ionLabelProps={{ color: "dark" }}
            icon={chipIcon}
          />
        </div>
      </IonRow>

      <IonCardHeader class={"ion-no-padding"}>
        <IonRow class={"ion-align-items-center ion-padding-horizontal"}>
          <IonCol>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCol>
          <IonCol>
            <Button
              type="icon"
              ariaLabel={`favorite-btn-${id}`}
              classes={"small-square ion-float-right"}
              ionButtonProps={{
                size: "small",
                shape: "round",
                onClick: handleFavorite,
              }}
              ionIconProps={{
                icon: star,
                size: "small",
                color: isFavorite ? "yellow" : "",
              }}
            />
          </IonCol>
        </IonRow>
      </IonCardHeader>
    </IonCard>
  );
};

export default InfoCard;
