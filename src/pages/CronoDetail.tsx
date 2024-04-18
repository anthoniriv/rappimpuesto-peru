import React, { useEffect, useRef, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonLoading,
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonInput,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/core/components";
import { RouteComponentProps } from "react-router";
import { useParams } from "react-router";
import localForage from "localforage";
import CordovaSQLiteDriver from "localforage-cordovasqlitedriver";

import "./CronoDetail.css";

const STORAGE_KEY = "myRucs";

const useStorage = () => {
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await localForage.defineDriver(CordovaSQLiteDriver);
      await localForage.setDriver([
        localForage.INDEXEDDB,
        localForage.WEBSQL,
        localForage.LOCALSTORAGE,
      ]);
      setStorageReady(true);
    };
    init();
  }, []);

  const getData = async () => {
    if (!storageReady) return [];
    const data = await localForage.getItem(STORAGE_KEY);
    return data || [];
  };

  const addData = async (data: any) => {
    const storedData: any[] = (await getData()) || [];
    storedData.push(data);
    return localForage.setItem(STORAGE_KEY, storedData);
  };

  const removeItem = async (data: any) => {
    const storedData: any[] = (await getData()) || [];
    const index = storedData.indexOf(data);
    if (index !== -1) {
      storedData.splice(index, 1);
      return localForage.setItem(STORAGE_KEY, storedData);
    }
  };

  const getItem = async (ruc: any) => {
    const storedData: any[] = (await getData()) || [];
    return storedData.find((item: any) => item.rucNumber === ruc);
  };

  return { storageReady, getData, addData, removeItem, getItem };
};

interface CronoDetailProps
  extends RouteComponentProps<{
    idRuc: string;
  }> {}

const CronoDetail: React.FC<CronoDetailProps> = () => {
  const STORAGE_KEY = "myRucs";

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );

  const { id } = useParams();
  let rucs: any[] = [];

  const fechas = [
    {
      PERIODO: "ENERO ",
      FECHA: " de Enero",
    },
    {
      PERIODO: "FEBRERO ",
      FECHA: " de Febrero",
    },
    {
      PERIODO: "MARZO ",
      FECHA: " de Marzo",
    },
    {
      PERIODO: "ABRIL ",
      FECHA: " de Abril",
    },
    {
      PERIODO: "MAYO ",
      FECHA: " de Mayo",
    },
    {
      PERIODO: "JUNIO ",
      FECHA: " de Junio",
    },
    {
      PERIODO: "JULIO ",
      FECHA: " de Julio",
    },
    {
      PERIODO: "AGOSTO ",
      FECHA: " de Agosto",
    },
    {
      PERIODO: "SETIEMBRE ",
      FECHA: " de Setiembre",
    },
    {
      PERIODO: "OCTUBRE ",
      FECHA: " de Octubre",
    },
    {
      PERIODO: "NOVIEMBRE ",
      FECHA: " de Noviembre",
    },
    {
      PERIODO: "DICIEMBRE ",
      FECHA: " de Diciembre",
    },
  ];

  let dataLoaded = false;
  let rucNumber: any;
  let rucHere: any;
  let savedRuc = false;

  useEffect(() => {
    console.log("useEffect", id);
    mainFunction();
  }, []);

  const useStorageInstance = useStorage();

  async function mainFunction() {
    await getRUCDetail();
    if (dataLoaded === true) {
      await editFechaAll();
      await editPeriodoAll();
    }
  }

  function getRUCDetail() {
    console.log(id);
    getSpecificRuc(id);
    changeDataLoaded();
    rucs = fechas;
  }

  function changeDataLoaded() {
    setTimeout(() => {
      dataLoaded = true;
    }, 1000);
  }

  async function getSpecificRuc(id: any) {
    console.log("getSpecificRuc", id);
    rucHere = await useStorageInstance.getItem(STORAGE_KEY);
    console.log("RucHeress", rucHere);
    if (rucHere == null || rucHere == undefined) {
      console.log("No se encontraron datos");
      rucHere = id;
      rucNumber = id;
      savedRuc = false;
    } else {
      rucNumber = rucHere.rucNumber;
      savedRuc = true;
    }
    console.log("RucHere", rucHere);
  }

  function plusString(str1: string, str2: string) {
    return str1 + str2;
  }

  function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  function editPeriodoAll() {
    for (let i = 0; i < fechas.length; i++) {
      fechas[i].PERIODO = plusString(fechas[i].PERIODO, `${getYear()}`);
    }
  }

  function getLastDigit() {
    console.log("RucHere", rucHere);
    if (rucHere.rucNumber) {
      const ruc = rucHere.rucNumber;
      const lastDigit = ruc.substring(10, 11);
      console.log(lastDigit);
      return lastDigit;
    } else {
      const ruc = rucHere;
      const lastDigit = ruc.substring(10, 11);
      console.log(lastDigit);
      return lastDigit;
    }
  }

  function editFechaAll() {
    getLastDigit();
    switch (getLastDigit()) {
      case "0":
        fechas[0].FECHA = plusString("14", " de Febrero");
        fechas[1].FECHA = plusString("14", " de Marzo");
        fechas[2].FECHA = plusString("14", " de Abril");
        fechas[3].FECHA = plusString("14", " de Mayo");
        fechas[4].FECHA = plusString("14", " de Junio");
        fechas[5].FECHA = plusString("14", " de Julio");
        fechas[6].FECHA = plusString("14", " de Agosto");
        fechas[7].FECHA = plusString("14", " de Setiembre");
        fechas[8].FECHA = plusString("14", " de Octubre");
        fechas[9].FECHA = plusString("14", " de Noviembre");
        fechas[10].FECHA = plusString("14", " de Diciembre");
        break;
      case "1":
        fechas[0].FECHA = plusString("15", " de Febrero");
        fechas[1].FECHA = plusString("15", " de Marzo");
        fechas[2].FECHA = plusString("15", " de Abril");
        fechas[3].FECHA = plusString("15", " de Mayo");
        fechas[4].FECHA = plusString("15", " de Junio");
        fechas[5].FECHA = plusString("15", " de Julio");
        fechas[6].FECHA = plusString("15", " de Agosto");
        fechas[7].FECHA = plusString("15", " de Setiembre");
        fechas[8].FECHA = plusString("15", " de Octubre");
        fechas[9].FECHA = plusString("15", " de Noviembre");
        fechas[10].FECHA = plusString("15", " de Diciembre");
        break;
      case "2":
        fechas[0].FECHA = plusString("16", " de Febrero");
        fechas[1].FECHA = plusString("16", " de Marzo");
        fechas[2].FECHA = plusString("16", " de Abril");
        fechas[3].FECHA = plusString("16", " de Mayo");
        fechas[4].FECHA = plusString("16", " de Junio");
        fechas[5].FECHA = plusString("16", " de Julio");
        fechas[6].FECHA = plusString("16", " de Agosto");
        fechas[7].FECHA = plusString("16", " de Setiembre");
        fechas[8].FECHA = plusString("16", " de Octubre");
        fechas[9].FECHA = plusString("16", " de Noviembre");
        fechas[10].FECHA = plusString("16", " de Diciembre");
        break;
      case "3":
        fechas[0].FECHA = plusString("17", " de Febrero");
        fechas[1].FECHA = plusString("17", " de Marzo");
        fechas[2].FECHA = plusString("17", " de Abril");
        fechas[3].FECHA = plusString("17", " de Mayo");
        fechas[4].FECHA = plusString("17", " de Junio");
        fechas[5].FECHA = plusString("17", " de Julio");
        fechas[6].FECHA = plusString("17", " de Agosto");
        fechas[7].FECHA = plusString("17", " de Setiembre");
        fechas[8].FECHA = plusString("17", " de Octubre");
        fechas[9].FECHA = plusString("17", " de Noviembre");
        fechas[10].FECHA = plusString("17", " de Diciembre");
        break;
      case "4":
        fechas[0].FECHA = plusString("18", " de Febrero");
        fechas[1].FECHA = plusString("18", " de Marzo");
        fechas[2].FECHA = plusString("18", " de Abril");
        fechas[3].FECHA = plusString("18", " de Mayo");
        fechas[4].FECHA = plusString("18", " de Junio");
        fechas[5].FECHA = plusString("18", " de Julio");
        fechas[6].FECHA = plusString("18", " de Agosto");
        fechas[7].FECHA = plusString("18", " de Setiembre");
        fechas[8].FECHA = plusString("18", " de Octubre");
        fechas[9].FECHA = plusString("18", " de Noviembre");
        fechas[10].FECHA = plusString("18", " de Diciembre");
        break;
      case "5":
        fechas[0].FECHA = plusString("19", " de Febrero");
        fechas[1].FECHA = plusString("19", " de Marzo");
        fechas[2].FECHA = plusString("19", " de Abril");
        fechas[3].FECHA = plusString("19", " de Mayo");
        fechas[4].FECHA = plusString("19", " de Junio");
        fechas[5].FECHA = plusString("19", " de Julio");
        fechas[6].FECHA = plusString("19", " de Agosto");
        fechas[7].FECHA = plusString("19", " de Setiembre");
        fechas[8].FECHA = plusString("19", " de Octubre");
        fechas[9].FECHA = plusString("19", " de Noviembre");
        fechas[10].FECHA = plusString("19", " de Diciembre");
        break;
      case "6":
        fechas[0].FECHA = plusString("20", " de Febrero");
        fechas[1].FECHA = plusString("20", " de Marzo");
        fechas[2].FECHA = plusString("20", " de Abril");
        fechas[3].FECHA = plusString("20", " de Mayo");
        fechas[4].FECHA = plusString("20", " de Junio");
        fechas[5].FECHA = plusString("20", " de Julio");
        fechas[6].FECHA = plusString("20", " de Agosto");
        fechas[7].FECHA = plusString("20", " de Setiembre");
        fechas[8].FECHA = plusString("20", " de Octubre");
        fechas[9].FECHA = plusString("20", " de Noviembre");
        fechas[10].FECHA = plusString("20", " de Diciembre");
        break;
      case "7":
        fechas[0].FECHA = plusString("21", " de Febrero");
        fechas[1].FECHA = plusString("21", " de Marzo");
        fechas[2].FECHA = plusString("21", " de Abril");
        fechas[3].FECHA = plusString("21", " de Mayo");
        fechas[4].FECHA = plusString("21", " de Junio");
        fechas[5].FECHA = plusString("21", " de Julio");
        fechas[6].FECHA = plusString("21", " de Agosto");
        fechas[7].FECHA = plusString("21", " de Setiembre");
        fechas[8].FECHA = plusString("21", " de Octubre");
        fechas[9].FECHA = plusString("21", " de Noviembre");
        fechas[10].FECHA = plusString("21", " de Diciembre");
        break;
      case "8":
        fechas[0].FECHA = plusString("22", " de Febrero");
        fechas[1].FECHA = plusString("22", " de Marzo");
        fechas[2].FECHA = plusString("22", " de Abril");
        fechas[3].FECHA = plusString("22", " de Mayo");
        fechas[4].FECHA = plusString("22", " de Junio");
        fechas[5].FECHA = plusString("22", " de Julio");
        fechas[6].FECHA = plusString("22", " de Agosto");
        fechas[7].FECHA = plusString("22", " de Setiembre");
        fechas[8].FECHA = plusString("22", " de Octubre");
        fechas[9].FECHA = plusString("22", " de Noviembre");
        fechas[10].FECHA = plusString("22", " de Diciembre");
        break;
      case "9":
        fechas[0].FECHA = plusString("23", " de Febrero");
        fechas[1].FECHA = plusString("23", " de Marzo");
        fechas[2].FECHA = plusString("23", " de Abril");
        fechas[3].FECHA = plusString("23", " de Mayo");
        fechas[4].FECHA = plusString("23", " de Junio");
        fechas[5].FECHA = plusString("23", " de Julio");
        fechas[6].FECHA = plusString("23", " de Agosto");
        fechas[7].FECHA = plusString("23", " de Setiembre");
        fechas[8].FECHA = plusString("23", " de Octubre");
        fechas[9].FECHA = plusString("23", " de Noviembre");
        fechas[10].FECHA = plusString("23", " de Diciembre");
        break;
    }
    //Aqui se detiene el loading
  }

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonPage>
      <IonLoading
        trigger="open-loading"
        message="Loading..."
        duration={3000}
        spinner="circles"
      />

      <IonContent className="mainDetail">
        <div className="top" style={{ display: "flex", flexDirection: "row" }}>
          <IonBackButton
            style={{ color: "white" }}
            text=""
            defaultHref="/cronograma"
          />
          <IonText>
            <h1 className="ruc">{rucNumber}</h1>
          </IonText>
        </div>
        <div className="titles">
          <IonText>PERIODO</IonText>
          <IonText>FECHA</IonText>
        </div>
        <IonContent
          style={{ height: "50%", "--background": "rgba(255, 255, 255, 0)" }}
        >
          <IonList>
            {rucs.map((ruc: any) => (
              <IonItem lines="none" key={ruc.PERIODO}>
                <IonLabel>{ruc.PERIODO}</IonLabel>
                <IonLabel>{ruc.FECHA}</IonLabel>
                <IonButton
                  slot="end"
                  fill="clear"
                  color="primary"
                  onClick={() => useStorageInstance.removeItem(ruc)}
                >
                  Remove
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
        <IonButton
          expand="full"
          color="primary"
          onClick={() => modal.current?.present()}
        >
          Add Data
        </IonButton>
        <IonModal ref={modal} onWillDismiss={onWillDismiss}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
              </IonButtons>
              <IonTitle>Add Data</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonInput ref={input} placeholder="Enter data"></IonInput>
            <IonButton expand="full" onClick={confirm}>
              Confirm
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default CronoDetail;
