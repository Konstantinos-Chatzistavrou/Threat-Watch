import {
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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon aria-hidden="true" src={logoRss} size={"large"} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid class={"ion-no-padding"}>
          <IonRow>
            <IonCol size={"1"}>
              <IonIcon
                aria-hidden="true"
                icon={syncCircle}
                style={{ fontSize: "24px" }}
              />
            </IonCol>
            <IonCol>
              <IonSearchbar
                aria-label="home-search-input"
                animated={true}
                placeholder="tap to search"
              ></IonSearchbar>
            </IonCol>
            <IonCol size={"1"}>
              <IonIcon
                aria-hidden="true"
                icon={sparkles}
                style={{ fontSize: "24px" }}
              />
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
