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
import { bookmark, download } from "ionicons/icons";
import React, { ReactNode } from "react";

interface InfoCardProps {
  id: number;
  title: string;
  handleBookmark: () => void;
  handleDownload?: () => void;
  isBookmarked: boolean;
  isDownloaded?: boolean;
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
  navLinkWrapper?: (child: ReactNode) => ReactNode;
}

const InfoCard = ({
  id,
  title,
  handleBookmark,
  handleDownload,
  isBookmarked,
  isDownloaded,
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
  navLinkWrapper,
}: InfoCardProps) => {
  const bookmarkButton = (
    <Button
      type="icon"
      ariaLabel={`bookmark-btn-${id}`}
      classes={"small-square ion-float-right"}
      ionButtonProps={{
        size: "small",
        shape: "round",
        onClick: handleBookmark,
      }}
      ionIconProps={{
        icon: bookmark,
        size: "small",
        color: isBookmarked ? "yellow" : "",
      }}
    />
  );

  const downloadButton = (
    <Button
      type="icon"
      ariaLabel={`download-btn-${id}`}
      classes={"small-square ion-float-right"}
      ionButtonProps={{
        size: "small",
        shape: "round",
        onClick: handleDownload,
      }}
      ionIconProps={{
        icon: download,
        size: "small",
        color: isDownloaded ? "cyan" : "",
      }}
    />
  );

  // transform to make the chip position relative to direct parent
  const CardText = (
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
      {navLinkWrapper ? navLinkWrapper(CardText) : CardText}
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
                  {bookmarkButton}
                  {downloadButton}
                </IonRow>
              </>
            )}
          </IonCol>
          {!cardContent && <IonCol>{bookmarkButton}</IonCol>}
        </IonRow>
      </IonCardHeader>
    </IonCard>
  );
};

export default InfoCard;
