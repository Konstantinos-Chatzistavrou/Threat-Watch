import { Button } from "@common/Button";
import CardListItem from "@common/CardListItem/CardListItem";
import Header from "@common/Header/Header";
import {
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonNav,
  IonNavLink,
  IonPage,
  IonRow,
  IonToggle,
  useIonAlert,
} from "@ionic/react";
import { ArticleDetails } from "@pages/article-details/ArticleDetails";
import React, { useState } from "react";

export interface CardProps {
  id: number;
  title: string;
  date: string;
}

interface EditCardListProps {
  cardItemsData: CardProps[];
  handleRemoveItem: () => void;
  alertHeaderMessage: string;
  removeButtonText: string;
  handleSelected: (id: number, checked: boolean) => void;
  selectedItems: Record<number, boolean>;
  clearSelectedItems: () => void;
}

export const EditCardList = ({
  cardItemsData,
  handleRemoveItem,
  alertHeaderMessage,
  removeButtonText,
  handleSelected,
  selectedItems,
  clearSelectedItems,
}: EditCardListProps) => {
  const [presentAlert] = useIonAlert();
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEditMode = (checked: boolean) => {
    setEditMode(checked);
    if (!checked) {
      clearSelectedItems();
    }
  };
  const shouldShowRemoveBtn = () => {
    let moreThanOneSelected = false;
    for (const k in selectedItems) {
      if (selectedItems[k]) {
        moreThanOneSelected = true;
        break;
      }
    }

    return editMode && moreThanOneSelected;
  };

  const handleRemove = () => {
    setEditMode(false);
    handleRemoveItem();
  };

  return (
    <IonNav
      root={() => (
        <IonPage>
          <Header title="Bookmarks" />
          <IonContent fullscreen>
            <IonGrid>
              <IonRow className={"ion-padding-vertical"}>
                <IonToggle
                  checked={editMode}
                  onIonChange={(e) => handleEditMode(e.detail.checked)}
                >
                  Edit
                </IonToggle>
              </IonRow>
              {cardItemsData.map(({ id, title, date }) => (
                <IonRow className={"ion-align-items-center"} key={id}>
                  <IonCol
                    size={editMode ? "11" : "12"}
                    className={"ion-no-padding ion-padding-bottom"}
                  >
                    <IonNavLink
                      routerDirection={"forward"}
                      component={() => (
                        <ArticleDetails id={id} bookmarked={true} />
                      )}
                    >
                      <CardListItem title={title} date={date} />
                    </IonNavLink>
                  </IonCol>
                  {editMode && (
                    <IonCol>
                      <IonCheckbox
                        checked={selectedItems[id] || false}
                        onIonChange={(e) =>
                          handleSelected(id, e.detail.checked)
                        }
                      ></IonCheckbox>
                    </IonCol>
                  )}
                </IonRow>
              ))}
              {shouldShowRemoveBtn() ? (
                <IonRow className={"ion-justify-content-center"}>
                  <Button
                    classes={"ion-margin-bottom"}
                    type={"button"}
                    ariaLabel={"remove-card-item-btn"}
                    ionButtonProps={{
                      id: "present-alert",
                      style: {
                        position: "fixed",
                        bottom: "0",
                      },
                      onClick: () => {
                        presentAlert({
                          header: alertHeaderMessage,
                          buttons: [
                            {
                              text: "Yes",
                              role: "confirm",
                              handler: handleRemove,
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
                    {removeButtonText}
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
