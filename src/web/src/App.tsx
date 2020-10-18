import React from 'react';

import { Routes } from './routes';
import { GlobalStyles } from './assets/styles/GlobalStyles';

import 'leaflet/dist/leaflet.css';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}
