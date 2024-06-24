// Using Multiple Handler

import React from "react";
import { useState } from "react";

const SignUp = () => {
  /*  function getdata() {
    const dataWrapperRef = document.querySelectorAll(".input-field");
    setdata(
      dataWrapperRef.forEach(function (item) {
        // console.log(item.value);
        userData.push(item.value);
      })
    );
    console.log("UserData : ", userData);
  } */

  /* function handleProductAdd(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      let currentInput = e.target.value;
      setdata([...userData, currentInput]);
    }
    console.log(userData);
    // userData.push();
  } */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameInput = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    console.log({
      name,
      email,
      username,
      password,
    });
  };

  /* 
  // How useState works internlly POLYFILL
  function useStateMy(val) {
    private test = val;
    function setState(newVal) { 
      test = newVal;
    }
    return [test, setState]; 
  } */

  return (
    // expecting only 1 div as one wrapper as it has only single node to accept. but it creates an extra div
    // To avoid extra div -> <React.Fragment> OR <>
    <React.Fragment>
      <h1>Sign Up</h1>
      <div className="user-data">
        <div className="field">
          <label>Name</label>
          <input onChange={handleNameInput} placeholder="Enter Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input onChange={handleEmailInput} placeholder="Enter Email" />
        </div>
        <div className="field">
          <label>Username</label>
          <input onChange={handleUsernameInput} placeholder="Enter Username" />
        </div>
        <div className="field">
          <label>Password</label>
          <input onChange={handlePasswordInput} placeholder="Enter Password" />
        </div>
        <div className="field btn-field">
          <button onClick={handleRegistration}>Register</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
