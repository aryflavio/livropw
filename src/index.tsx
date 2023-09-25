import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Livraria from './pages/Livraria/index';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Livraria/>
  </React.StrictMode>
);
