import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Balance from './routes/balance';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);