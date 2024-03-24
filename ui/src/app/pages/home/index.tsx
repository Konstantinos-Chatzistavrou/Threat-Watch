import {
  IonAccordion,
  IonAccordionGroup,
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
  syncCircle,
} from "ionicons/icons";
import React from "react";
import Header from "../../common/Header/Header";
import Button from "../../common/Button/Button";

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
                classes={"custom"}
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
                classes={"ion-float-right custom"}
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
                      <IonLabel class={"ion-padding-end"} color={"dark"}>
                        Critical News
                      </IonLabel>
                      <Button
                        type={"icon"}
                        icon={ellipsisHorizontalCircleSharp}
                        ariaLabel={"critical-news-menu"}
                        size={"small"}
                        classes={"none"}
                      />
                    </IonRow>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    lorem
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
