import React from "react";
import { useState } from "react";
import style from "./Login.module.css"

const SignUp = (props) => {

    let [user, setUser] = useState("")
    let [password, setPassword] = useState("")
    let [confirm, setConfirm] = useState("")
    let [error, setError] = useState("")


    const userChange = (evt) => {
        setUser(evt.target.value)
    }

    const passwordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const confirmChange = (evt) => {
        setConfirm(evt.target.value)
    }

    const createAccount = (evt) => {
        evt.preventDefault()
        let accountObj = {user, password}
        if (!props.accountArray.find(account => account.user === user)){
            if(password === confirm){
                props.createAccountHandler(accountObj)
                setError("")
                return
            }
            console.log('no')
            setError("passwordDont")
            return
        }
        console.log('okay')
        setError("userExists")
        return
    }


  return (
    <div className={style.bod}>
      <form className={style.Card} onSubmit={createAccount}>
        {error === 'good' && <h1>Account Create!</h1>}
        <div>
          <label htmlFor="">Username: </label>
          <input type="text" placeholder="Username" onChange={userChange}/>
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input type="password" placeholder="Password" onChange={passwordChange}/>
        </div>
        <div>
          <label htmlFor="">Confirm password: </label>
          <input type="password" placeholder="Confirm password" onChange={confirmChange}/>
        </div>
        {error === "userExists" && <p>That username Exists</p>}
        {error === "passwordDont" && <p>The passwords don't match</p>}
        <button>Log-In</button>
      </form>
    </div>
  );
};

export default SignUp