import React from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { beerOutline, fastFoodOutline, cafeOutline, walkOutline, pizzaOutline, wineOutline } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import Tab2 from "./Tab2";
import { Redirect, Route } from "react-router";
import { useHistory } from "react-router-dom";

const Tab1: React.FC = () => {
  const history=useHistory();
  function gotab2() {
     history.push('/tab2');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="title">Discovery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid >
          <IonRow class="row1" >
            <IonCol  class="test1" onClick={gotab2}>
            <IonIcon class="logo" icon={beerOutline} /><br/>
            <IonLabel class="text1">Bars & Hotels</IonLabel><br/>
            <IonLabel class="text2">42 Plac</IonLabel>
            </IonCol>
            <IonCol class="test1">
            <IonIcon class="logo" icon={wineOutline} /><br/>
            <IonLabel class="text1">Fine Dining</IonLabel><br/>
            <IonLabel class="text2">15 Plac</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow class="row1">
            <IonCol class="test1">
            <IonIcon class="logo" icon={cafeOutline} /><br/>
            <IonLabel class="text1">Cafes</IonLabel><br/>
            <IonLabel class="text2">28 Plac</IonLabel>
            </IonCol>
            <IonCol class="test1">
            <IonIcon class="logo" icon={walkOutline} /><br/>
            <IonLabel class="text1">Nearby</IonLabel><br/>
            <IonLabel class="text2">34 Plac</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow class="row1">
            <IonCol class="test1">
            <IonIcon class="logo" icon={fastFoodOutline} /><br/>
            <IonLabel class="text1">Fine Foods</IonLabel><br/>
            <IonLabel class="text2">29 Plac</IonLabel>
            </IonCol>
            <IonCol class="test1">
            <IonIcon class="logo" icon={pizzaOutline} /><br/>
            <IonLabel class="text1">Feature Foods</IonLabel><br/>
            <IonLabel class="text2">21 Plac</IonLabel>
            </IonCol>
          </IonRow>

          

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
