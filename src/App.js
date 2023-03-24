import React, { useState } from "react";
import './App.css';
import Header from './Components/Header';
import Splash from './Components/Splash';
import Login from './Components/Login';
import SignUp from "./Components/SignUp";

function App() {

  let [pageDisplayed, setPageDisplayed] = useState('splash')

  let [accounts, setAccounts] = useState([])

  const createAccountHandler = (accountObj) => {

    setAccounts([...accounts, accountObj]);
  };

  const setPageHandler = (page) => {
    setPageDisplayed(page)
  };

  console.log(accounts)
  return (
    <div className="App">
      <Header setPageHandler={setPageHandler}/>
      {pageDisplayed === "splash" && <Splash/>}
      {pageDisplayed === "login" && <Login/>}
      {pageDisplayed === "signup" && <SignUp createAccountHandler={createAccountHandler} accountArray={accounts} setPageHandler={setPageHandler}/>}
        
    </div>
  );
}

export default App;
