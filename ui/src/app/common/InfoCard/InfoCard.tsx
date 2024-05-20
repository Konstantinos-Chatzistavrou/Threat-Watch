import { Button } from "@common/Button";
import { Chip } from "@common/Chip";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonRow,
} from "@ionic/react";
import { download, star } from "ionicons/icons";
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
  cardContent?: string;
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
  cardContent,
}: InfoCardProps) => {
  const favoriteButton = (
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
  );

  const downloadButton = (
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
        icon: download,
        size: "small",
        color: isFavorite ? "cyan" : "",
      }}
    />
  );

  return (
    <IonCard
      className={`ion-no-margin ${classes || ""}`}
      style={{
        maxWidth: cardMaxWidth,
        border: "1px solid black",
      }}
      data-testid={testId}
    >
      <IonRow style={{ transform: "scale(1,1)" }}>
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
            bottom: "0.2rem",
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

      <IonCardHeader
        class={"ion-no-padding"}
        style={{ borderTop: "1px solid black" }}
      >
        <IonRow class={"ion-align-items-center ion-padding-horizontal"}>
          <IonCol>
            <IonRow>
              <IonCardTitle>{title}</IonCardTitle>
            </IonRow>
            {cardContent && (
              <>
                <IonRow>
                  <IonCardContent class={"ion-no-padding"}>
                    {cardContent}
                  </IonCardContent>
                </IonRow>
                <IonRow class={"ion-justify-content-end"}>
                  {favoriteButton}
                  {downloadButton}
                </IonRow>
              </>
            )}
          </IonCol>
          {!cardContent && <IonCol>{favoriteButton}</IonCol>}
        </IonRow>
      </IonCardHeader>
    </IonCard>
  );
};

export default InfoCard;
