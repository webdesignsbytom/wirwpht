import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Context
import UserContextProvider from './context/UserContext';
import ToggleContextProvider from './context/ToggleContext';
// Component
import App from './App';
// Styles
import './styles/index.css';
import './styles/components.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <ToggleContextProvider>
        <App />
      </ToggleContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
