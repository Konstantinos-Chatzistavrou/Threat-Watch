import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { sparkles, star, syncCircle } from "ionicons/icons";
import React from "react";
import Header from "../../common/Header/Header";
import Button from "../../common/Button/Button";
import lockSecurityImage from "../../../assets/lock-circuit.jpeg";
import CriticalNews from "./components/CriticalNews";
import ArticleMockData from "./mock-data/articleHeaders.json";

const Home: React.FC = () => {
  const handleSearchChange = () => {};

  const renderNewsArticles = ({ title }: Article) => (
    <IonCard
      className={"ion-no-margin ion-margin-top"}
      style={{
        maxWidth: "15rem",
      }}
    >
      <img
        alt="security-thumbnail"
        src={lockSecurityImage}
        style={{
          width: "15rem", // 225px
          maxHeight: "5rem", // 80px
          objectFit: "none",
        }}
      />
      <IonCardHeader class={"ion-no-padding"}>
        <IonRow class={"ion-align-items-center"}>
          <IonCol>
            <IonCardTitle>{title}</IonCardTitle>
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
  );

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
              <CriticalNews
                articles={ArticleMockData}
                render={renderNewsArticles}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
