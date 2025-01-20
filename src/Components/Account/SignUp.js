import { useState } from "react";
import Login from "./Login";
export default function SignUp() {
  class User {
    constructor(Name, PhoneNumber) {
      this.name = Name;
      this.phonenumber = PhoneNumber;
    }
  }
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    const user1 = User(name, password);
    users.push(user1);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="username">Username</label>
        <br />
        <input type="username" name="Username" onChange={handleUsername} />{" "}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" onChange={handlePassword} />
        <br />
        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <Login Name={users[0].s}></Login>
    </div>
  );
}
