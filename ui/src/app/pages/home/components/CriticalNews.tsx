import React, { ReactNode } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { caretDownCircle, ellipsisHorizontalCircleSharp } from "ionicons/icons";
import Button from "../../../common/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css"; // import 'swiper/modules/effect-fade/effect-fade';
// import 'swiper/modules/effect-fade/effect-fade';
// import "swiper/modules/navigation/navigation";
// import "swiper/modules/pagination/pagination";

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
            />
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
