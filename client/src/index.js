import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { PetContextProvider } from './context/petContext/PetContext';
import { ARequestContextProvider } from './context/adoptRequestContext/ARContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PetContextProvider>
        <ARequestContextProvider>
          <App />
        </ARequestContextProvider>
      </PetContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
