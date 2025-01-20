import { useState } from "react";
import { UserService } from "./User";

const Signup = ({ updateUserList }) => {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userService = new UserService();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = userService.createUser(
      username,
      fname,
      lname,
      email,
      password
    );
    updateUserList(newUser); 
    return <div>
      <h1>created an account</h1>
    </div>// Update user list in the parent component
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
          required
        />
        <br />
        <label htmlFor="fname">First Name</label>
        <br />
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={handleFname}
          required
        />
        <br />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          value={lname}
          onChange={handleLname}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
