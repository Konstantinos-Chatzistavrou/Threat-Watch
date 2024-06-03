import { Article } from "@/app/api/articleApi/ArticleTypes";
import { bookmarkedArticleMockData } from "@/app/api/articleApi/mock-data/bookmarkedArticleMockData";
import gridLockImage from "@assets/grid-lock.jpeg";
import { Button } from "@common/Button";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonNav,
  IonNavLink,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./Bookmarks.css";
import { ArticleDetails } from "@pages/article-details/ArticleDetails";
import React, { ReactNode, useState } from "react";
import Header from "../../common/Header/Header";

export const Bookmarks: React.FC = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>(
    bookmarkedArticleMockData,
  );

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
          <Header title="Bookmarks" />
          <IonContent fullscreen>
            <IonGrid>
              <IonRow className={"ion-margin-bottom"}>
                <Button
                  type={"button"}
                  ariaLabel={"edit-btn"}
                  classes={"ion-no-margin"}
                >
                  Edit
                </Button>
              </IonRow>
              {bookmarkedArticles.map((article) => (
                <IonRow>
                  <IonCard
                    className={"ion-no-margin ion-margin-bottom"}
                    style={{
                      width: "100%",
                      border: "1px solid black",
                    }}
                  >
                    <IonRow
                      className={"ion-justify-content-between ion-padding"}
                    >
                      <IonCol
                        className={"ion-no-padding ion-justify-content-between"}
                      >
                        <IonCardHeader className={"ion-no-padding"}>
                          <IonCardTitle>{article.title}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent className={"ion-no-padding"}>
                          temp
                        </IonCardContent>
                      </IonCol>

                      <img
                        alt={"alt"}
                        src={gridLockImage}
                        style={{
                          width: "120px",
                          maxHeight: "103px",
                        }}
                      />
                    </IonRow>
                  </IonCard>
                </IonRow>
              ))}
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    />
  );
};
