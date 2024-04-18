import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  calculator,
  calendar,
  ellipse,
  home,
  square,
  triangle,
} from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import CronoDetail from "./pages/CronoDetail";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CalcRentabilidad from "./pages/CalcRentabilidad";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/calculadoras">
            <Tab1 />
          </Route>
          <Route path="/calculadoras/calc-rentabilidad/">
            <CalcRentabilidad />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/cronograma">
            <Tab3 />
          </Route>
          <Route path="/cronograma/cronodetail/:id">
            <CronoDetail idRuc={""} />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/calculadoras">
            <IonIcon aria-hidden="true" icon={calculator} />
            <IonLabel>Calculadoras</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/cronograma">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Cronograma</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
