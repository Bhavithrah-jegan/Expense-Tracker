import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import {Transactionlist} from './components/Transactionlist';
import {Addtransaction} from './components/Addtransaction';


import { GlobalProvider } from './context/GlobalState';
import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <Transactionlist/>
        <Addtransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
