import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Invoices</h1>
      <nav id="main-nav">
        <Link to="/invoices">Invoices</Link> |  {" "}
        <Link to="/expenses">Expenses</Link> |  {" "}
        <Link to="/balance">Balance</Link>
      </nav>
    </div>
  );
}

export default App;
