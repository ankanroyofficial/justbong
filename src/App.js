import React from 'react';
import { registerRootComponent } from "expo"
import StackNavigation from './navigation/StackNavigation';

function App() {
  return (
   <StackNavigation/>
  );
}

export default registerRootComponent(App)