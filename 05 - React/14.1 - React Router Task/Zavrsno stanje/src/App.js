import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <h2>Home</h2>
      <p>Stranica se može navigirati preko URL-a</p>
      <p>za Kontakt stranicu u URL traku upišite http://localhost:3000/kontakt/</p>
      <p>za stranicu Adresa u URL traku upišite http://localhost:3000/adresa/</p>
    </div>);
}

const Kontakt = () => {
  return (
    <div>
      <h2>Kontakt</h2>
      <p>Tel: +385 1 2332 861</p>
      <p>E-mail: info@algebra.hr</p>
    </div>);
}

function Adresa() {
  return (
    <div>
      <h2>Adresa</h2>
      <p>Zagreb – Ilica 242, Maksimirska 58a (Testni centar)</p>
    </div>);
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adresa/">Adresa</Link>
            </li>
            <li>
              <Link to="/kontakt/">Kontakt</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/adresa/" component={Adresa} />
        <Route path="/kontakt/" component={Kontakt} />
      </div>
    </BrowserRouter>
  );
}