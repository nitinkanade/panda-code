import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import { Formula, getFormula } from '../data/formulas';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';

function ViewMessage() {
  const [formula, setFormula] = useState<Formula>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const currentFormula = getFormula(parseInt(params.id, 10));
    setFormula(currentFormula);
  });

  const config = {
    "MathJax": {
      "tex": {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      }
    }
  };

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <MathJaxContext config={config}>
          {formula ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {formula.name}
              </h2>
              <div className="mb-4">
                <MathJax>
                  {"$$" + formula.formula + "$$"}
                </MathJax>
              </div>
              <p className="text-gray-600">
                {formula.description}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">
              Select a formula to view details
            </p>
          )}

        </MathJaxContext>

      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
