import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonToggle,
  IonIcon,
  IonItem,
} from "@ionic/react";
import Top1 from "../assets/png/top1.png";

import "./Tab1.css";
import { calculator } from "ionicons/icons";

const Tab1: React.FC = () => {
  let disabled = false;
  let categorias = false;
  let tipotercera = false;

  const categoria_cambiada = (event: any) => {
    categorias = event.detail.checked;
    console.log(categorias);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="top1">
          <img src={Top1} alt="" />
        </div>
        <div className="selections">
          <div className="categoria">
            <IonText>
              <h3>
                Tercera
                <br />
                Categoría
              </h3>
            </IonText>
            <IonToggle
              disabled={disabled}
              onIonChange={categoria_cambiada}
              checked={categorias}
              color="primary"
            ></IonToggle>
            <IonText>
              <h3>
                Cuarta
                <br />
                Categoría
              </h3>
            </IonText>
          </div>
        </div>
        {!categorias && (
          <div className="calculadoras-1">
            {!categorias && (
              <IonItem className="calculadora-unica" routerLink="calc-unic">
                <IonIcon icon={calculator}></IonIcon>
                <IonText>
                  <h3>
                    Calculadora
                    <br />
                    Unica
                  </h3>
                </IonText>
              </IonItem>
            )}
            {!tipotercera && (
              <IonItem className="calculadora-anual" routerLink="calc-anual1">
                <IonIcon icon={calculator}></IonIcon>
                <IonText>
                  <h3>
                    Calculadora
                    <br />
                    Mensual
                  </h3>
                </IonText>
              </IonItem>
            )}
          </div>
        )}
        {!categorias && (
          <div className="calculadoras-2">
            {!categorias && (
              <IonItem
                className="calculadora-unica"
                routerLink="/calculadoras/calc-rentabilidad/"
              >
                <IonIcon icon={calculator}></IonIcon>
                <IonText>
                  <h3>
                    Calculadora de
                    <br />
                    mi rentabilidad
                  </h3>
                </IonText>
              </IonItem>
            )}
            {!tipotercera && (
              <IonItem className="calculadora-anual" routerLink="calc-precio">
                <IonIcon icon={calculator}></IonIcon>
                <IonText>
                  <h3>
                    Calculadora
                    <br />
                    mi precio
                  </h3>
                </IonText>
              </IonItem>
            )}
          </div>
        )}
        <div className="calculadoras-1">
          {tipotercera && (
            <IonItem className="calculadora-anual" routerLink="calc-anual2">
              <IonIcon icon={calculator}></IonIcon>
              <IonText>
                <h3>
                  Calculadora
                  <br />
                  Mensual 2
                </h3>
              </IonText>
            </IonItem>
          )}
        </div>
        {categorias && (
          <IonItem className="calculadoras-1" routerLink="calc-cuarta">
            <div className="calculadora-unica">
              <IonIcon icon={calculator}></IonIcon>
              <IonText>
                <h3>
                  Calculadora
                  <br />
                  Unica 2
                </h3>
              </IonText>
            </div>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
