import { useState } from "react";

export default function Login({ Name, Passowrd }) {
  const [password, setPassword] = useState(Passowrd);
  const [name, setName] = useState(Name);

  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }

  const handleName = (e) =>{
    setName(e.target.value);
  }

  const handleSubmit = () => {
    if ((password === Passowrd) && (name === Name)){
        console.log("Successfully logged in");
    }
    else {
        console.log("Failed to log in\nName: " + Name + "\nPassword: " + Passowrd);
    }
  }
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <br></br>
        <input type="text" name="name" placeholder="name..." onChange={handleName} />
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input type="password" name="password" placeholder="password..." onChange={handlePassword}/>
        <br></br>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}
