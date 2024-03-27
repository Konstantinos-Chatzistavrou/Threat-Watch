import React, { ReactNode } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
  IonRow,
} from "@ionic/react";
import { caretDownCircle, ellipsisHorizontalCircleSharp } from "ionicons/icons";
import Button from "../../../common/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

interface CriticalNewsProps {
  articles: Article[];
  render: (article: Article) => ReactNode;
}

const CriticalNews = ({ articles, render }: CriticalNewsProps) => {
  return (
    <IonAccordionGroup class={"custom"}>
      <IonAccordion
        value="first"
        toggleIcon={caretDownCircle}
        toggleIconSlot="start"
      >
        <IonItem slot="header">
          <IonRow class={"ion-align-items-center"}>
            <IonLabel class={"ion-padding-end"}>Critical News</IonLabel>
            <Button
              type={"icon"}
              icon={ellipsisHorizontalCircleSharp}
              ariaLabel={"critical-news-menu"}
              iconSize={"small"}
              classes={"none"}
              id={"critical-news-more-info"}
            />
            <IonPopover
              trigger={"critical-news-more-info"}
              triggerAction={"click"}
              side={"bottom"}
              alignment={"center"}
            >
              <IonContent>
                <IonList className={"ion-no-padding"} lines={"full"}>
                  {["Critical News", "Rumors"].map((item, i) => (
                    <IonItem key={i}>
                      <IonLabel class={"ion-text-center"}>{item}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </IonContent>
            </IonPopover>
          </IonRow>
        </IonItem>
        <div
          slot="content"
          style={{
            maxWidth: "15rem",
          }}
        >
          <Swiper>
            {articles.map((article) => (
              <SwiperSlide key={article.id}>{render(article)}</SwiperSlide>
            ))}
          </Swiper>
          {/*<IonRow class={"scroll"}>{children}</IonRow>*/}
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
};

export default CriticalNews;
