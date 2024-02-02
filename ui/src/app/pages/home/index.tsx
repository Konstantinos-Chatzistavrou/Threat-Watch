import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import "./index.css";
import { logoRss, sparkles, syncCircle } from "ionicons/icons";
import React from "react";

// todo: figure out why SVG doesn't load
const Home: React.FC = () => {
  const handleSearchChange = () => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon aria-hidden="true" src={logoRss} size={"large"} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className={"ion-no-padding"}>
          <IonRow
            className={"ion-padding-horizontal"}
            data-testid={"home-search-row"}
          >
            <IonCol size={"1"}>
              <IonButton
                className={"ion-no-padding custom"}
                aria-label="search-reload"
              >
                <IonIcon
                  slot={"icon-only"}
                  aria-hidden={true}
                  icon={syncCircle}
                />
              </IonButton>
            </IonCol>
            <IonCol className={"ion-padding-horizontal"}>
              <IonSearchbar
                aria-label="home-search-input"
                animated={true}
                placeholder="tap to search"
                debounce={500}
                onIonInput={handleSearchChange}
                className={"custom"}
              ></IonSearchbar>
            </IonCol>
            <IonCol size={"1"}>
              <IonButton
                className={"ion-no-padding custom"}
                aria-label="sparkles-placeholder-aria-label"
              >
                <IonIcon
                  slot={"icon-only"}
                  aria-hidden={true}
                  icon={sparkles}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonList>
              <IonListHeader>
                <IonLabel>Critical News</IonLabel>
              </IonListHeader>
              <IonItem></IonItem>
              <IonItem></IonItem>
            </IonList>
          </IonRow>
          <IonRow>
            <IonListHeader>
              <IonLabel>NEWS</IonLabel>
            </IonListHeader>
            <IonList></IonList>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
