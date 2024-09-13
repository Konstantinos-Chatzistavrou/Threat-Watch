import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./index.css";
import Header from "../../common/Header/Header";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <Header title="Settings" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>Settings Page</strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
