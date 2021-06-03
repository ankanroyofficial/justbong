import React from 'react';
import { registerRootComponent } from "expo"
import OnBoardingPage from './screen/OnBoardingPage';

function App() {
  return (
    <OnBoardingPage />
  );
}

export default registerRootComponent(App)