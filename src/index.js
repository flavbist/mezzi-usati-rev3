import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Importa Firebase per inizializzarlo
import { initializeApp } from 'firebase/app';

// Configurazione Firebase (usa la tua configurazione)
const firebaseConfig = {
  apiKey: "AIzaSyAQcE3-MInQ0cqfrEaAZc6ZlPYkidPijog",
  authDomain: "mezziusati-7f3af.firebaseapp.com",
  projectId: "mezziusati-7f3af",
  storageBucket: "mezziusati-7f3af.appspot.com",
  messagingSenderId: "250616706905",
  appId: "1:250616706905:web:98669a6bc4e6a1a4cffe48"
};

// Inizializza Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Opzionale: per misurare le performance
reportWebVitals();