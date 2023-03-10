import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import ContextProvider from "./context/contextProvider";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);