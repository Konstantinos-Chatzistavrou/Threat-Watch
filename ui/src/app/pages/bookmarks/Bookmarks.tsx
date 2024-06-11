import { Article } from "@/app/api/articleApi/ArticleTypes";
import { bookmarkedArticleMockData } from "@/app/api/articleApi/mock-data/bookmarkedArticleMockData";
import gridLockImage from "@assets/grid-lock.jpeg";
import { Button } from "@common/Button";
import bookmarksContent from "@content/bookmarks.json";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonNav,
  IonNavLink,
  IonPage,
  IonRow,
  IonText,
  IonToggle,
  useIonAlert,
} from "@ionic/react";
import "./Bookmarks.css";
import { ArticleDetails } from "@pages/article-details/ArticleDetails";
import { timeSharp } from "ionicons/icons";
import React, { ReactNode, useState } from "react";
import Header from "../../common/Header/Header";

export const Bookmarks: React.FC = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>(
    bookmarkedArticleMockData,
  );
  const [presentAlert] = useIonAlert();

  const navLinkWrapper = (articleId: number) => (child: ReactNode) => (
    <IonNavLink
      routerDirection={"forward"}
      component={() => <ArticleDetails id={articleId} />}
    >
      {child}
    </IonNavLink>
  );

  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedArticles, setSelectedArticles] = useState<
    Record<number, boolean>
  >({});

  const handleEditMode = (checked: boolean) => {
    setEditMode(checked);
    if (!checked) {
      setSelectedArticles({});
    }
  };
  const handleArticledSelected = (articleId: number, checked: boolean) => {
    setSelectedArticles((prev) => ({ ...prev, [articleId]: checked }));
  };

  const shouldShowRemoveArticlesBtn = () => {
    let moreThanOneSelected = false;
    for (const k in selectedArticles) {
      if (selectedArticles[k]) {
        moreThanOneSelected = true;
        break;
      }
    }

    return editMode && moreThanOneSelected;
  };

  const handleRemovedBookmarks = () => {
    setBookmarkedArticles((prev) =>
      prev.filter((article) => !selectedArticles[article.id]),
    );
    setSelectedArticles({});
    setEditMode(false);
  };

  return (
    <IonNav
      root={() => (
        <IonPage>
          <Header title="Bookmarks" />
          <IonContent fullscreen>
            <IonGrid>
              <IonRow>
                <IonToggle
                  checked={editMode}
                  onIonChange={(e) => handleEditMode(e.detail.checked)}
                >
                  Edit
                </IonToggle>
              </IonRow>
              {bookmarkedArticles.map((article) => (
                <IonRow className={"ion-align-items-center"} key={article.id}>
                  <IonCol
                    size={editMode ? "11" : "12"}
                    className={"ion-no-padding ion-padding-bottom"}
                  >
                    <IonCard
                      className={"ion-no-margin"}
                      style={{
                        width: "100%",
                        border: "1px solid black",
                      }}
                    >
                      <IonRow
                        className={"ion-justify-content-between ion-padding"}
                      >
                        <div style={{ transform: "scale(1,1)" }}>
                          <IonCardHeader className={"ion-no-padding"}>
                            <IonCardTitle>{article.title}</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent
                            className={"ion-no-padding"}
                            style={{
                              position: "fixed",
                              bottom: 0,
                            }}
                          >
                            <IonRow className={"ion-align-items-center"}>
                              <IonIcon
                                icon={timeSharp}
                                style={{ padding: "0 2px 0 0" }}
                              />
                              <IonText color={"medium"}>
                                {new Date(
                                  article.createdDate,
                                ).toLocaleDateString()}
                              </IonText>
                            </IonRow>
                          </IonCardContent>
                        </div>

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
                  </IonCol>
                  {editMode && (
                    <IonCol>
                      <IonCheckbox
                        checked={selectedArticles[article.id] || false}
                        onIonChange={(e) =>
                          handleArticledSelected(article.id, e.detail.checked)
                        }
                      ></IonCheckbox>
                    </IonCol>
                  )}
                </IonRow>
              ))}
              {shouldShowRemoveArticlesBtn() ? (
                <IonRow className={"ion-justify-content-center"}>
                  <Button
                    classes={"ion-margin-bottom"}
                    type={"button"}
                    ariaLabel={"remove-bookmark-btn"}
                    ionButtonProps={{
                      id: "present-alert",
                      style: {
                        position: "fixed",
                        bottom: "0",
                      },
                      onClick: () => {
                        presentAlert({
                          header: bookmarksContent.alertConfirmation,
                          buttons: [
                            {
                              text: "Yes",
                              role: "confirm",
                              handler: handleRemovedBookmarks,
                            },
                            {
                              text: "No",
                              role: "cancel",
                            },
                          ],
                        });
                      },
                    }}
                  >
                    {bookmarksContent.removeArticlesButton}
                  </Button>
                </IonRow>
              ) : undefined}
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    />
  );
};
