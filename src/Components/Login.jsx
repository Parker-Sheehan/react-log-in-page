import React from "react";
import style from "./Login.module.css"

const Login = () => {
  return (
    <div className={style.bod}>
      <form className={style.Card} action="">
        <div>
          <label htmlFor="">Username: </label>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Log-In</button>
      </form>
    </div>
  );
};

export default Login