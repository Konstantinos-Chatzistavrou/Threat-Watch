import { buildElementId } from "@/app/utils/test/testUtils";
import lockSecurityImage from "@assets/lock-circuit.jpeg";
import Button from "@common/Button/Button";
import Chip from "@common/Chip/Chip";
import Header from "@common/Header/Header";
import homeContent from "@content/home.json";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import ArticleMockData from "@pages/home/__tests__/mock-data/ArticleHeaders.json";
import { sparkles, star, syncCircle } from "ionicons/icons";
import React, { useState } from "react";
import { CriticalNews } from "./components/CriticalNews";

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(ArticleMockData);
  const handleSearchChange = () => {};
  const handleFavorite = (id: number) => () => {
    setArticles((list) =>
      list.map((article) => {
        if (article.id !== id) return article;
        return { ...article, isFavorite: !article.isFavorite };
      }),
    );
  };

  const renderNewsArticles = ({ title, id, isFavorite }: Article) => (
    <IonCard
      className={"ion-no-margin ion-margin-end"}
      style={{
        maxWidth: "15rem",
      }}
      data-testid={`${testId.criticalNewsArticle}-${id}`}
    >
      <img
        alt="security-thumbnail"
        src={lockSecurityImage}
        style={{
          width: "15rem", // 225px
          maxHeight: "5rem", // 80px
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
          content={homeContent.criticalNews.chipLabel}
          backgroundColor={"#59BE3B"}
          ionLabelProps={{ color: "dark" }}
        />
      </div>

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
                onClick: handleFavorite(id),
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

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid className={""}>
          <IonRow
            className={"ion-align-items-center"}
            data-testid={testId.homeSearchRow}
          >
            <IonCol size={"2"}>
              <Button
                type="icon"
                ariaLabel={"search-reload"}
                classes={"default-square"}
                ionIconProps={{ icon: syncCircle }}
              />
            </IonCol>
            <IonCol>
              <IonSearchbar
                aria-label="home-search-input"
                animated={true}
                placeholder={homeContent.searchPlaceholder}
                debounce={500}
                onIonInput={handleSearchChange}
                className={"custom"}
              ></IonSearchbar>
            </IonCol>
            <IonCol size={"2"}>
              <Button
                type="icon"
                ariaLabel={"sparkles-placeholder-aria-label"}
                classes={"ion-float-right default-square"}
                ionIconProps={{ icon: sparkles }}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <CriticalNews articles={articles} render={renderNewsArticles} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const prefixId = (section: string, element: string) =>
  buildElementId("home", section, element);
export const testId = {
  criticalNewsArticle: prefixId("critical-news", "article"),
  homeSearchRow: prefixId("search-bar", "row"),
};
