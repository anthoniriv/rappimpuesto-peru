import { IonContent, IonButton, IonPage } from '@ionic/react';
import './Tab2.css'; // Asegúrate de que la ruta es correcta según tu estructura de directorios

const Tab2: React.FC = () => {

  // Función para abrir el enlace de contacto
  const contact = () => {
    window.open('https://linktr.ee/welquerguzman', '_system', 'location=yes');
    return false;
  };
  return (
    <IonPage>
      <IonContent className="main" fullscreen>
        <div className="content">
          <div className="divisor"></div>
          <p>
            Somos un estudio contable tributario y legal que ha desarrollado esta app útil para ti.
          </p>
          <IonButton className="info-button" onClick={contact}>
            CONTACTANOS
          </IonButton>
          <br /><br />
          <p className="info">
            *Presione aqui para obtener asesoria gratuita en temas de contabilidad tributación, constitución de empresas, temas societarios y mas...
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
