import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonPage,
  IonPopover,
  IonIcon,
} from "@ionic/react";
import "./CalcPrecio.css";
import Top2 from "../assets/png/top2.png";
import { informationCircle } from "ionicons/icons";

const CalcPrecio: React.FC = () => {
  const [compras, setCompras] = useState("");
  const [gastos, setGastos] = useState("");
  const [ganancia1, setGanancia1] = useState("");
  const [igv, setIgv] = useState("");
  const [precio, setPrecio] = useState("");
  const [ganancia2, setGanancia2] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const [popoverContent, setPopoverContent] = useState("");

  const handleInfoClick = (content: string) => {
    setPopoverContent(content);
    setShowPopover(true);
  };

  const handleChangeCompras = (value: string) => {
    setCompras(value);
    calcularIGV(value, gastos, ganancia1);
  };

  const handleChangeGastos = (value: string) => {
    setGastos(value);
    calcularIGV(compras, value, ganancia1);
  };

  const handleChangeGanancia1 = (value: string) => {
    setGanancia1(value);
    calcularIGV(compras, gastos, value);
  };

  const calcularIGV = (compras: string, gastos: string, ganancia1: string) => {
    if (
      compras !== "" &&
      compras !== undefined &&
      gastos !== "" &&
      gastos !== undefined &&
      ganancia1 !== "" &&
      ganancia1 !== undefined
    ) {
      const total =
        parseFloat(compras) + parseFloat(gastos) + parseFloat(ganancia1);
      const igvCalculado = total * 0.18;
      setIgv(igvCalculado.toFixed(2));

      const precioCalculado = total + igvCalculado;
      setPrecio(precioCalculado.toFixed(2));

      const ganancia2Calculada = igvCalculado - parseFloat(igv);
      setGanancia2(ganancia2Calculada.toFixed(2));
    } else {
      setIgv("");
      setPrecio("");
      setGanancia2("");
    }
  };

  const handleReset = () => {
    setCompras("");
    setGastos("");
    setGanancia1("");
    setIgv("");
    setPrecio("");
    setGanancia2("");
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="top2">
          <img src={Top2} alt="" />
        </div>
        <div className="mainPrecio">
          <h2 className="labels">
            Compras
            <IonButton
              className="infoButton"
              onClick={() =>
                handleInfoClick(
                  "Aquí debemos poder el costo del producto u otros que tienen factura"
                )
              }
            >
              i
            </IonButton>
          </h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="start" className="solesLabel">
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              position="floating"
              onInput={(e: any) => handleChangeCompras(e.target.value)}
              value={compras}
              placeholder="00.00"
            ></IonInput>
          </IonItem>
          <h2 className="labels">
            Gastos
            <IonButton
              className="infoButton"
              onClick={() =>
                handleInfoClick(
                  "Aquí debemos poder el costo de los servicios u gastos referidos al producto, no tienen factura"
                )
              }
            >
              i
            </IonButton>
          </h2>
          <IonItem className="inputs" lines="none">
            <IonLabel
              position="start"
              className="solesLabel"
            >
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              position="floating"
              onInput={(e: any) => handleChangeGastos(e.target.value)}
              value={gastos}
              placeholder="00.00"
            ></IonInput>
          </IonItem>
          <h2 className="labels">
            Ganancia 1
            <IonButton
              className="infoButton"
              onClick={() =>
                handleInfoClick(
                  "Aquí poner el monto en soles del calculo de ganancia en obtenido en el cálculo anterior"
                )
              }
            >
              i
            </IonButton>
          </h2>
          <IonItem className="inputs" lines="none">
            <IonLabel
              position="start"
              className="solesLabel"
            >
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              position="floating"
              onInput={(e: any) => handleChangeGanancia1(e.target.value)}
              value={ganancia1}
              placeholder="00.00"
            ></IonInput>
          </IonItem>
          <h2 className="labels">
            IGV
            <IonButton
              className="infoButton"
              onClick={() => handleInfoClick("Sub total mas IGV")}
            >
              i
            </IonButton>
          </h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="start" className="solesLabel">
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              position="floating"
              value={igv}
              readonly
              disabled={true}
              placeholder="00.00"
            ></IonInput>
          </IonItem>
          <h2 className="labels">
            Precio
            <IonButton
              className="infoButton"
              onClick={() => handleInfoClick("Precio que debo cobrar")}
            >
              i
            </IonButton>
          </h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="start" className="solesLabel">
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              position="floating"
              value={precio}
              readonly
              disabled={true}
              placeholder="00.00"
            ></IonInput>
          </IonItem>
          <h2 className="labels">
            Ganancia 2
            <IonButton
              className="infoButton"
              onClick={() => handleInfoClick("Crédito fiscal – igv a pagar")}
            >
              i
            </IonButton>
          </h2>
          <IonItem className="inputs" lines="none">
            <IonLabel position="start" className="solesLabel">
              S/
            </IonLabel>
            <IonInput
              inputmode="numeric"
              position="floating"
              value={ganancia2}
              readonly
              disabled={true}
              placeholder="00.00"
            ></IonInput>
          </IonItem>
        </div>
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={() => setShowPopover(false)}
        >
          <IonContent class="ion-padding">{popoverContent}</IonContent>
        </IonPopover>
        <IonButton className="button" expand="block" onClick={handleReset}>
          Reiniciar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CalcPrecio;
