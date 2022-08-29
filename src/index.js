import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import './styles/common.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        <Routes>
          <Route path="*" element={<App />}/>
        </Routes>
      </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

