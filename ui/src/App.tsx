import './App.css'
import '@ionic/react/css/core.css';
import {IonRedirect, IonRoute, setupIonicReact, IonApp, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";

setupIonicReact();

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import Home from "./pages/Home.tsx";


function App() {
    return (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <IonRoute exact={true} path={"/"} render={() => <Home/>} />
                <IonRoute render={() => <IonRedirect to={"/"}/>}/>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
  )
}

export default App
