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
import Chip from "../../common/Chip/Chip";

const Home: React.FC = () => {
  const handleSearchChange = () => {};

  const renderNewsArticles = ({ title }: Article) => (
    <IonCard
      className={"ion-no-margin ion-margin-end"}
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
      <div
        style={{
          position: "fixed",
          bottom: "2.5rem",
          left: "0.2rem",
        }}
      >
        <Chip
          content={"HIGHLY DISCUSSED"}
          backgroundColor={"#59BE3B"}
          ionLabelProps={{ color: "dark" }}
        />
      </div>

      <IonCardHeader class={"ion-no-padding"}>
        <IonRow class={"ion-align-items-center ion-padding-horizontal"}>
          <IonCol>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCol>
          <IonCol>
            <Button
              type="icon"
              ariaLabel={"favorite-btn"}
              classes={"small-square ion-float-right"}
              ionButtonProps={{
                size: "small",
                shape: "round",
              }}
              ionIconProps={{
                icon: star,
                size: "small",
              }}
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
                placeholder="tap to search"
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
