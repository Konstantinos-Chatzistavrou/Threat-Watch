import { buildElementId } from "@/app/utils/test/testUtils";
import lockSecurityImage from "@assets/lock-circuit.jpeg";
import Button from "@common/Button/Button";
import InfoCard from "@common/InfoCard/InfoCard";
import homeContent from "@content/home.json";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
  IonRow,
} from "@ionic/react";
import {
  caretDownCircle,
  caretForwardCircle,
  ellipsisHorizontalCircleSharp,
} from "ionicons/icons";
import "swiper/swiper-bundle.min.css";

import "swiper/swiper.min.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface CriticalNewsProps {
  articles: Article[];
  handleFavorite: (id: number) => void;
}

export const CriticalNews = ({
  articles,
  handleFavorite,
}: CriticalNewsProps) => {
  const [showSwiper, setShowSwiper] = useState(false);

  return (
    <IonGrid class={"ion-no-padding"}>
      <IonRow class={"ion-align-items-center ion-justify-content-center"}>
        <IonCol size={"1"}>
          <Button
            type={"icon"}
            ariaLabel={"critical-news-dropdown-button"}
            classes={"none"}
            ionButtonProps={{
              id: "critical-news-dropdown-button",
              onClick: () => {
                setShowSwiper((prev) => !prev);
              },
            }}
            ionIconProps={{
              size: "small",
              icon: showSwiper ? caretDownCircle : caretForwardCircle,
            }}
          ></Button>
        </IonCol>
        <IonCol size={"4"}>
          <IonRow>
            <IonLabel>{homeContent.criticalNews.heading}</IonLabel>
          </IonRow>
        </IonCol>
        <IonCol>
          <Button
            type={"icon"}
            ariaLabel={"critical-news-menu"}
            classes={"none"}
            ionButtonProps={{
              id: "critical-news-more-info",
            }}
            ionIconProps={{
              size: "small",
              icon: ellipsisHorizontalCircleSharp,
            }}
            dataTestId={testId.moreInfoBtn}
          />
          <IonPopover
            trigger={"critical-news-more-info"}
            triggerAction={"click"}
            side={"bottom"}
            alignment={"center"}
          >
            <IonContent data-testid={testId.popoverContent}>
              <IonList className={"ion-no-padding"} lines={"full"}>
                {Object.values(homeContent.criticalNews.menuItem).map(
                  (item, i) => (
                    <IonItem key={i}>
                      <IonLabel class={"ion-text-center"}>{item}</IonLabel>
                    </IonItem>
                  ),
                )}
              </IonList>
            </IonContent>
          </IonPopover>
        </IonCol>
      </IonRow>
      <IonRow
        class={!showSwiper ? "ion-hide" : ""}
        data-testid={testId.swiperContainer}
      >
        <Swiper slidesPerView={"auto"}>
          {articles.map((article) => (
            <SwiperSlide key={article.id} style={{ width: "fit-content" }}>
              <InfoCard
                id={article.id}
                title={article.title}
                handleFavorite={() => handleFavorite(article.id)}
                isFavorite={article.isFavorite}
                chipLabel={homeContent.criticalNews.chipLabel}
                cardImgAlt={"security-thumbnail"}
                cardImg={lockSecurityImage}
                testId={`${testId.criticalNewsArticle}-${article.id}`}
                cardMaxWidth={"15rem"}
                imgWidth={"15rem"} // 225px
                imgMaxHeight={"5rem"} // 80px
                classes={"ion-margin-end"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonRow>
    </IonGrid>
  );
};

const prefixId = (name: string) =>
  buildElementId("home", "critical-news", name);
export const testId = {
  moreInfoBtn: prefixId("more-info"),
  popoverContent: prefixId("popover-content"),
  swiperContainer: prefixId("swiper-container"),
  criticalNewsArticle: prefixId("article"),
};
