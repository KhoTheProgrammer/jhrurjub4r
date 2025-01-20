import React from "react";
import { UserService } from "./User";
import { useState } from "react";
const Login = () => {
    const userservice = new UserService();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleUsername = e => {
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = userservice.authenticate(username, password);
        if (user){
            alert("You successfully logged in");
            
        }else{
            alert("invalid username or password\npassword: " + password);
        }
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">Username</label>
        <br />
        <input type="text" name="" id="" onChange={handleUsername}/> <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" name="" id="" onChange={handlePassword}/> <br />
        <button type="submit" onClick={handleSubmit}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
