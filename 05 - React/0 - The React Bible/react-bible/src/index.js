import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App component
import './App.css'; // CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import { Expenses, Invoices } from './Components'; // For Router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; // For Router

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
