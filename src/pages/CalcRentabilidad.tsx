import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./CalcRentabilidad.css";
import Top2 from "../assets/png/top2.png";

const CalcRentabilidad: React.FC = () => {
  const [costoValue, setCostoValue] = useState<any>("");
  const [porcentajeGanarValue, setPorcentajeGanarValue] = useState<any>("");
  const [gananciaValue, setGananciaValue] = useState<any>("");

  function handleCostoValue(value: string) {
    setCostoValue(value);
    handleGananciaValue(value, porcentajeGanarValue);
    console.log("Venta value:", value);
  }

  function handlePorcentajeGanarValue(value: string) {
    setPorcentajeGanarValue(value);
    handleGananciaValue(costoValue, value);
    console.log("IGV value:", value);
  }

  function handleGananciaValue(costo: string, porcentajeGanar: string) {
    const costoFloat = parseFloat(costo);
    const porcentajeGanarFloat = parseFloat(porcentajeGanar);

    if (
      costo !== "" &&
      !isNaN(costoFloat) &&
      porcentajeGanar !== "" &&
      !isNaN(porcentajeGanarFloat)
    ) {
      console.log("Costo:", costoFloat);
      console.log("Porcentaje de ganancia:", porcentajeGanarFloat);
      let porcentaje = porcentajeGanarFloat / 100;
      console.log("Porcentaje:", porcentaje);
      let division = 1 - porcentaje;
      console.log("Division:", division);
      const ganancia = costoFloat / division;
      console.log("ganancia value:", ganancia);
      setGananciaValue(ganancia.toFixed(2));
      console.log("Total value:", ganancia.toFixed(2));
    } else {
      setGananciaValue("");
      console.log("Costo y porcentaje de ganancia deben ser números válidos.");
    }
  }

  function reset() {
    setCostoValue("");
    setPorcentajeGanarValue("");
    setGananciaValue("");
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
              value={costoValue}
              onInput={(e: any) => handleCostoValue(e.target.value)}
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
              value={porcentajeGanarValue}
              onInput={(e: any) => handlePorcentajeGanarValue(e.target.value)}
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
              value={gananciaValue}
              readonly={true}
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
