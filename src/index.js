import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Empresa } from './pages/Institucional/Empresa';
import { LandingPage } from "./pages/landing-page/LandingPage";
import { PropertyDetails } from './pages/propertyDetails';
import { Documentos } from "./pages/screenDocumentos/Documentos";
import { Financiar } from './pages/screenFinanciar/Financiar';
import { ListaImoveis2 } from './pages/searchPage/ListaImoveis2';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <LandingPage/>,
      },
      {
        path: 'documentos',
        element: <Documentos/>
      },
      {
        path: 'financiar',
        element: <Financiar/>
      },
      {
        path: 'imoveis',
        element: <ListaImoveis2/>
      },
      {
        path: 'quem-somos',
        element: <Empresa/>
      },
      {
        path: "imovel/:propertyId",
        element: <PropertyDetails/>
      },
      {
        path: "imoveis/imovel/:propertyId",
        element: <PropertyDetails/>
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
