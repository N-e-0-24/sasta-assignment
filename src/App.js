import React from 'react'
import Header from './Components/Header'
import Expense from './Components/Expense';
import Income from './Components/Income';
import Transaction from './Components/Transaction';
import AddT from './Components/AddT';
import { GlobalProvider } from './Components/context/GlobalState';
import './App.css';
const App = () => {
  return (
   
    <div className="container">
      <GlobalProvider/>
      <Header/>  <Expense/>
      <Income/>
      
      <Transaction/>
      <AddT/>
    </div>
    
  )
}

export default App


