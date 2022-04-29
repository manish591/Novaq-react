import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { StateContextProvider, AuthContextProvider } from 'context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
