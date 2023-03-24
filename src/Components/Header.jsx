import React from "react";

import Head from "./Header.module.css"


const Header = (props) => {

    const logInHandler = () => {
        props.setPageHandler("login")
    }

    const signUpHandler = () => {
        props.setPageHandler("signup")
    }

    const splashPageHandler = () => {
        props.setPageHandler("splash")
    }

  return (
    <nav className={Head.nav}>
        <h1 className={Head.title} onClick={splashPageHandler}>SuperCoolSite.com</h1>
      <div className={Head.btnDiv}>
        <button className={Head.btn} onClick={logInHandler}>log-in</button>
        <button className={Head.btn} onClick={signUpHandler}>sign up</button>
      </div>
    </nav>
  );
};

export default Header