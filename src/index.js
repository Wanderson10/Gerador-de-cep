import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProviderPages } from './context/contextCep';
import { ToastContainer, Zoom } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderPages>
     
      <App />
      <ToastContainer transition={Zoom} />
    
    </ProviderPages>
  </React.StrictMode>
);


