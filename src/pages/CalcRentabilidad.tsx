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
} from "@ionic/react";
import "./CalcRentabilidad.css";

const CalcRentabilidad: React.FC = () => {
  const [ventaValue, setVentaValue] = useState<string>(""); // State for the venta input
  const [igvValue, setIgvValue] = useState<string>(""); // State for the IGV input
  const [totalValue, setTotalValue] = useState<string>(""); // State for the computed total

  function handleVentaChange(event: CustomEvent) {
    const newVentaValue = event.detail.value;
    setVentaValue(newVentaValue);
    calculateTotal(newVentaValue, igvValue);
  }

  function handleIgvChange(event: CustomEvent) {
    const newIgvValue = event.detail.value;
    setIgvValue(newIgvValue);
    calculateTotal(ventaValue, newIgvValue);
  }

  // Function to calculate total based on the formula provided
  function calculateTotal(venta: string, igv: string) {
    const ventaNum = parseFloat(venta);
    const igvNum = parseFloat(igv) / 100;
    if (!isNaN(ventaNum) && !isNaN(igvNum)) {
      const total = ventaNum / (1 - igvNum);
      setTotalValue(total.toFixed(2));
    } else {
      setTotalValue("");  // Clear the total if inputs are not valid numbers
    }
  }

  // Function to reset all inputs
  function reset() {
    setVentaValue("");
    setIgvValue("");
    setTotalValue("");
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mis Costos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className="inputs" lines="none">
          <IonLabel position="stacked">Venta (S/)</IonLabel>
          <IonInput
            inputmode="numeric"
            placeholder="00.00"
            value={ventaValue}
            onIonChange={handleVentaChange}
          />
        </IonItem>
        <IonItem className="inputs" lines="none">
          <IonLabel position="stacked">IGV (%)</IonLabel>
          <IonInput
            inputmode="numeric"
            placeholder="0"
            value={igvValue}
            onIonChange={handleIgvChange}
          />
        </IonItem>
        <IonItem className="inputs" lines="none">
          <IonLabel position="stacked">Total (S/)</IonLabel>
          <IonInput
            inputmode="numeric"
            placeholder="00.00"
            value={totalValue}
            readonly  // Make the total input read-only
          />
        </IonItem>
        <IonButton expand="block" onClick={reset}>Reiniciar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CalcRentabilidad;
