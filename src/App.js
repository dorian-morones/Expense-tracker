import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from "./components/Header.jsx"
import { Balance } from "./components/Balance.jsx"
import { IncomeExp } from "./components/IncomeExp.jsx"
import { TransactionList } from "./components/TransactionList.jsx"
import { AddTransaction } from "./components/AddTransaction.jsx"
import { GlobalProvider } from "./context/GlobalState.js"

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Header />
          </div>
          <div className="col-sm-12">
            <Balance />
            <IncomeExp />
          </div>
          <div className="col-sm-6">
            <TransactionList />
          </div>
          <div className="col-sm-6">
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
