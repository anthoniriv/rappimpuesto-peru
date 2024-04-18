import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import "./CalcRentabilidad.css";
import Top2 from "../assets/png/top2.png";
import { colorFill } from "ionicons/icons";

const CalcRentabilidad: React.FC = () => {
  const [ventaValue, setVentaValue] = useState<any>("");
  const [igvValue, setIgvValue] = useState<any>("");
  const [totalValue, setTotalValue] = useState<any>("");

  function handleVentaChange(event: any) {
    setVentaValue(event.target.value);
    console.log("Venta value:", event.target.value);
  }

  function handleIgvChange(event: any) {
    setIgvValue(event.target.value);
    console.log("IGV value:", event.target.value);
  }

  function handleTotalChange(event: any) {
    setTotalValue(event.target.value);
    console.log("Total value:", event.target.value);
  }

  function reset() {
    setVentaValue("");
    setIgvValue("");
    setTotalValue("");
    console.log("Reset button clicked");
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="top2">
          <img src={Top2} alt="" />
        </div>
        <div className="main">
          <h2 className="labels">Mis Costos</h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="start" class="solesLabel">
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              id="input-venta"
              fill="outline"
              placeholder="00.00"
              value={ventaValue}
              onIonChange={handleVentaChange}
            ></IonInput>
          </IonItem>
          <h2 className="labels">Porcentaje que quiero ganar</h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="end" class="solesLabel">
              %
            </IonLabel>
            <IonInput
              inputmode="numeric"
              id="input-igv"
              fill="outline"
              placeholder="0"
              value={igvValue}
              onIonChange={handleIgvChange}
            ></IonInput>
          </IonItem>
          <h2 className="labels">Ganancia</h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="start" class="solesLabel">
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              id="input-total"
              fill="outline"
              placeholder="00.00"
              value={totalValue}
              onIonChange={handleTotalChange}
            ></IonInput>
          </IonItem>
        </div>
        <IonButton className="buttonReiniciar" expand="block" onClick={reset}>
          Reiniciar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CalcRentabilidad;
