import { Article } from "@/app/api/articleApi/ArticleTypes";
import { articleMockData } from "@/app/api/articleApi/mock-data/articleMockData";
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
  IonNav,
  IonNavLink,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { ArticleDetails } from "@pages/article-details/ArticleDetails";
import { sparkles, syncCircle, timeSharp } from "ionicons/icons";
import React, { ReactNode, useState } from "react";
import { CriticalNews } from "./components/CriticalNews";

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(articleMockData);
  const handleSearchChange = () => {};
  const handleBookmark = (id: number) => {
    setArticles((list) =>
      list.map((article) => {
        if (article.id !== id) return article;
        return { ...article, isBookmarked: !article.isBookmarked };
      }),
    );
  };

  const handleDownload = (id: number) => {
    setArticles((list) =>
      list.map((article) => {
        if (article.id !== id) return article;
        return { ...article, isDownloaded: !article.isDownloaded };
      }),
    );
  };

  const criticalArticles = articles.filter((article) => article.isCritical);
  const nonCriticalArticles = articles.filter((article) => !article.isCritical);

  const navLinkWrapper = (articleId: number) => (child: ReactNode) => (
    <IonNavLink
      routerDirection={"forward"}
      component={() => <ArticleDetails id={articleId} />}
    >
      {child}
    </IonNavLink>
  );
  return (
    <IonNav
      root={() => (
        <IonPage>
          <Header title={"Home"} />
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
                    articles={criticalArticles}
                    handleBookmark={handleBookmark}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size={"12"}>
                  <IonHeader class={"ion-no-border"}>
                    {homeContent.news.heading}
                  </IonHeader>
                </IonCol>
                {nonCriticalArticles.map((article) => {
                  const timePassedMs =
                    new Date().getTime() -
                    new Date(article.updatedDate).getTime();
                  const timePassedSec = timePassedMs / 1000;
                  let timePassedLabel;
                  if (timePassedSec < 60) {
                    timePassedLabel = `0 ${homeContent.news.timestamp.minutesAgo}`;
                  } else if (timePassedSec < 3600) {
                    timePassedLabel = `${Math.floor(timePassedSec / 60)} ${homeContent.news.timestamp.minutesAgo}`;
                  } else if (timePassedSec < 3600 * 24) {
                    timePassedLabel = `${Math.floor(timePassedSec / 3600)} ${homeContent.news.timestamp.hoursAgo}`;
                  } else {
                    timePassedLabel = `${Math.floor(timePassedSec / 3600 / 24)} ${homeContent.news.timestamp.daysAgo}`;
                  }

                  return (
                    <IonCol size={"6"}>
                      <InfoCard
                        id={article.id}
                        title={article.title}
                        handleBookmark={() => handleBookmark(article.id)}
                        handleDownload={() => handleDownload(article.id)}
                        isBookmarked={article.isBookmarked}
                        isDownloaded={article.isDownloaded}
                        chipLabel={timePassedLabel}
                        cardImg={gridLockImage}
                        cardImgAlt={"security-thumbnail"}
                        testId={`${testId.newsInfoCard}-${article.id}`}
                        chipIcon={timeSharp}
                        cardContent={article.summary}
                        navLinkWrapper={navLinkWrapper(article.id)}
                      />
                    </IonCol>
                  );
                })}
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    />
  );
};

const prefixId = (section: string, element: string) =>
  buildElementId("home", section, element);
export const testId = {
  homeSearchRow: prefixId("search-bar", "row"),
  newsInfoCard: prefixId("news", "info-card"),
};
