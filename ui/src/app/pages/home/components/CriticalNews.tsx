import React, { ReactNode, useState } from "react";
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
import Button from "../../../common/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import homeContent from "../../../content/home.json";

const CriticalNews = ({ articles, render }: CriticalNewsProps) => {
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
          />
          <IonPopover
            trigger={"critical-news-more-info"}
            triggerAction={"click"}
            side={"bottom"}
            alignment={"center"}
          >
            <IonContent>
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
      <IonRow class={!showSwiper ? "ion-hide" : ""}>
        <Swiper slidesPerView={"auto"}>
          {articles.map((article) => (
            <SwiperSlide key={article.id} style={{ width: "fit-content" }}>
              {render(article)}
            </SwiperSlide>
          ))}
        </Swiper>
      </IonRow>
    </IonGrid>
  );
};

interface CriticalNewsProps {
  articles: Article[];
  render: (article: Article) => ReactNode;
}

export default CriticalNews;
