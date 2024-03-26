import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import {
  caretDownCircle,
  ellipsisHorizontalCircleSharp,
  sparkles,
  star,
  syncCircle,
} from "ionicons/icons";
import React from "react";
import Header from "../../common/Header/Header";
import Button from "../../common/Button/Button";
import lockSecurityImage from "../../../assets/lock-circuit.jpeg";

const Home: React.FC = () => {
  const handleSearchChange = () => {};

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid className={""}>
          <IonRow
            className={"ion-align-items-center"}
            data-testid={"home-search-row"}
          >
            <IonCol size={"2"}>
              <Button
                ariaLabel={"search-reload"}
                type="icon"
                icon={syncCircle}
                classes={"default-square"}
              />
            </IonCol>
            <IonCol>
              <IonSearchbar
                aria-label="home-search-input"
                animated={true}
                placeholder="tap to search"
                debounce={500}
                onIonInput={handleSearchChange}
                className={"custom"}
              ></IonSearchbar>
            </IonCol>
            <IonCol size={"2"}>
              <Button
                classes={"ion-float-right default-square"}
                ariaLabel={"sparkles-placeholder-aria-label"}
                type="icon"
                icon={sparkles}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonAccordionGroup class={"custom"}>
                <IonAccordion
                  value="first"
                  toggleIcon={caretDownCircle}
                  toggleIconSlot="start"
                >
                  <IonItem slot="header">
                    <IonRow class={"ion-align-items-center"}>
                      <IonLabel class={"ion-padding-end"}>
                        Critical News
                      </IonLabel>
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
                      maxWidth: "225px",
                    }}
                  >
                    <IonCard className={"ion-no-margin"}>
                      <img
                        alt="security-thumbnail"
                        src={lockSecurityImage}
                        style={{
                          width: "225px",
                          maxHeight: "80px",
                          objectFit: "none",
                        }}
                      />
                      <IonCardHeader class={"ion-no-padding"}>
                        <IonRow class={"ion-align-items-center"}>
                          <IonCol>
                            <IonCardTitle>Card Title</IonCardTitle>
                          </IonCol>
                          <IonCol>
                            <Button
                              type="icon"
                              ariaLabel={"favorite-btn"}
                              size={"small"}
                              icon={star}
                              iconSize={"small"}
                              classes={"small-square ion-float-right"}
                              shape={"round"}
                            />
                          </IonCol>
                        </IonRow>
                      </IonCardHeader>
                    </IonCard>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
