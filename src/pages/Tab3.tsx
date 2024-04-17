import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonList,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "./Tab3.css";

import Top3 from "../assets/png/top3.png";

const Tab3: React.FC = () => {
  let cronograma: any;
  let rucsSaved: any = [];
  let listRucs: any = [];
  let unicoRuc: any = [];

  function generaraCronograma(cronogramaInput: any) {
    console.log("ESTE ES EL VALOR QUE SE ENVIA", cronogramaInput);
    cronograma = "";
    //this.router.navigate(["/cronograma", cronogramaInput]);
  }

  function removeItem(index: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <IonPage>
      <div className="top3">
        <img src={Top3} alt="" />
      </div>
      <IonContent class="contenido">
        <IonSearchbar
          color="light"
          style={{ width: "80%", margin: "auto", color: "#203680" }}
          type="tel"
          maxlength={11}
          inputMode="numeric"
          placeholder="Introduce tu N° de RUC"
          value={cronograma}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              generaraCronograma(cronograma);
            }
          }}
        ></IonSearchbar>
        <IonAccordionGroup>
          <IonAccordion className="acordion">
            <IonItem slot="header">
              <IonLabel style={{ color: "#fff" }}>RUC GUARDADOS</IonLabel>
            </IonItem>

            <IonList slot="content">
              {listRucs.map((ruc: any, index: any) => (
                <IonItem
                  className="contenido"
                  lines="none"
                  key={index}
                  routerLink={`/cronograma/${ruc.rucNumber}`}
                >
                  <IonLabel>{ruc.rucName}</IonLabel>
                  <IonButtons slot="end">
                    <IonButton onClick={() => removeItem(index)}>
                      <IonIcon slot="icon-only" name="trash"></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonItem>
              ))}
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;


