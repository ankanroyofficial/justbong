import React from 'react';
import { registerRootComponent } from "expo"
import StackNavigation from './navigation/StackNavigation';
import firebase from 'firebase'
import { firebaseConfig } from '../db/config';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}


function App() {
  return (
   <StackNavigation/>
  );
}

export default registerRootComponent(App)