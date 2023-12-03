// import React from 'react';
import {IonButton, IonContent, IonDatetime, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

function Home():JSX.Element {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonDatetime></IonDatetime>
                <IonButton fill="clear">Start</IonButton>
                <h1>Vite + React</h1>
                <div className="card">
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </IonContent>
        </IonPage>
    );
}

export default Home;
