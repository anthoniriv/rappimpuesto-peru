import React from "react";
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
  const handleVentaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the value from the input
    const ventaValue = event.target.value;
    // Do something with the value
    console.log("Venta value:", ventaValue);
  };

  const handleIgvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the value from the input
    const igvValue = event.target.value;
    // Do something with the value
    console.log("IGV value:", igvValue);
  };

  const handleTotalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the value from the input
    const totalValue = event.target.value;
    // Do something with the value
    console.log("Total value:", totalValue);
  };

  const reset = () => {
    // Implement the reset logic here
    console.log("Reset button clicked");
  };

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
              onChange={handleVentaChange}
            ></IonInput>
          </IonItem>
          <h2 className="labels">Porcentaje que quiero ganar</h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="end" class="solesLabel">
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              id="input-igv"
              fill="outline"
              placeholder="00.00"
              onChange={handleIgvChange}
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
              onChange={handleTotalChange}
            ></IonInput>
          </IonItem>
        </div>
        <IonButton
          className="buttonReiniciar"
          expand="block"
          onClick={() => reset()}
        >
          Reiniciar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CalcRentabilidad;
