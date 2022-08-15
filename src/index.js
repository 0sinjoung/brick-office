import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/common.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

