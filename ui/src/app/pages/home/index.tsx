import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { sparkles, syncCircle } from "ionicons/icons";
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
            className={"ion-justify-content-start ion-align-items-center"}
            data-testid={"home-search-row"}
          >
            <IonCol size={"2"}>
              <Button
                ariaLabel={"search-reload"}
                type="icon"
                icon={syncCircle}
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
                classes={"ion-float-right"}
                ariaLabel={"sparkles-placeholder-aria-label"}
                type="icon"
                icon={sparkles}
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
