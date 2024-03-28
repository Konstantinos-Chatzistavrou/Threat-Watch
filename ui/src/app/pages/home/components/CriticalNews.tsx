import React, { ReactNode, useEffect, useRef } from "react";
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
  const accordionGroupRef = useRef<HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (accordionGroupRef?.current) {
      accordionGroupRef.current;
    }
  }, []);
  return (
    <IonAccordionGroup class={"custom"} ref={accordionGroupRef}>
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
        <div slot="content">
          <Swiper spaceBetween={16} slidesPerView={"auto"}>
            {articles.map((article) => (
              <SwiperSlide key={article.id} style={{ width: "fit-content" }}>
                {render(article)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
};

export default CriticalNews;
