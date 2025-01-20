import React from "react";
import { useState } from "react";
import { readData, writeData } from "./ReadAndWrite";

const Register = () => {
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const userData = await readData();

    const newuser = { username, firstname, lastname, email, password };
    const updatedUserData = [...userData, newuser];

    await writeData(updatedUserData);
  };
  const handleUsername = (e) => {
    setusername(e.target.value);
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlelastname = (e) => {
    setlastname(e.target.value);
  };

  const handlefirstname = (e) => {
    setfirstname(e.target.value);
  };
  return (
    <form action="">
      <label htmlFor="username">Username</label>
      <br />
      <input type="username" name="Username" onChange={handleUsername} /> <br />
      <label htmlFor="password">firstname</label>
      <br />
      <input type="password" name="password" onChange={handlefirstname} />
      <br />
      <label htmlFor="password">lastname</label>
      <br />
      <input type="password" name="password" onChange={handlelastname} />
      <br />
      <label htmlFor="password">email</label>
      <br />
      <input type="password" name="password" onChange={handleEmail} />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" onChange={handlePassword} />
      <br />
      <button type="submit" onClick={handlesubmit}>
        Sign Up
      </button>
    </form>
  );
};

export default Register;
