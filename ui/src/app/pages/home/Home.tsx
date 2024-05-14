import { buildElementId } from "@/app/utils/test/testUtils";
import gridLockImage from "@assets/grid-lock.jpeg";
import Button from "@common/Button/Button";
import Header from "@common/Header/Header";
import InfoCard from "@common/InfoCard/InfoCard";
import "./HomeStyles.css";
import homeContent from "@content/home.json";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import ArticleSummaryMockData from "@pages/home/__tests__/mock-data/ArticleSummary.json";
import CriticalArticleSummaryMockData from "@pages/home/__tests__/mock-data/CriticalArticleSummary.json";
import { sparkles, syncCircle, timeSharp } from "ionicons/icons";
import React, { useState } from "react";
import { CriticalNews } from "./components/CriticalNews";

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(
    CriticalArticleSummaryMockData,
  );
  const handleSearchChange = () => {};
  const handleFavorite = (id: number) => {
    setArticles((list) =>
      list.map((article) => {
        if (article.id !== id) return article;
        return { ...article, isFavorite: !article.isFavorite };
      }),
    );
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
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
              <CriticalNews
                articles={articles}
                handleFavorite={handleFavorite}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonHeader class={"ion-no-border"}>
              {homeContent.news.heading}
            </IonHeader>
            {ArticleSummaryMockData.map((article, i) => (
              <IonCol size={i === 0 ? "12" : "6"}>
                <InfoCard
                  id={article.id}
                  title={article.title}
                  handleFavorite={() => handleFavorite(article.id)}
                  isFavorite={article.isFavorite}
                  chipLabel={`2 ${homeContent.news.timestamp.hoursAgo}`}
                  cardImg={gridLockImage}
                  cardImgAlt={"security-thumbnail"}
                  testId={`${testId.newsInfoCard}-${article.id}`}
                  chipIcon={timeSharp}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const prefixId = (section: string, element: string) =>
  buildElementId("home", section, element);
export const testId = {
  homeSearchRow: prefixId("search-bar", "row"),
  newsInfoCard: prefixId("news", "info-card"),
};
