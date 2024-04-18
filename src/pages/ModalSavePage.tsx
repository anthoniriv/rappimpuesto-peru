import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ModalSavePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal Save Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Add your content here */}
      </IonContent>
    </IonPage>
  );
};

export default ModalSavePage;