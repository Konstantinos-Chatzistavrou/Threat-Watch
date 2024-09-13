import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./index.css";
import Header from "../../common/Header/Header";

const Courses: React.FC = () => {
  return (
    <IonPage>
      <Header title="Courses" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>Under Development</strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
