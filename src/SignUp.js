import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handlepassword = (e) => {
    setUser({ username: user.username, password: e.target.value });
  };

  const handleusername = (e) => {
    setUser({username: e.target.value, password: user.password})
  }
  return (
    <div className=" flex justify-center items-center h-screen bg-gray-300">
      <div>
        <form action="/sss" onSubmit={<Navigate to="/"></Navigate>} method="Get">
          <label htmlFor="username" className=" uppercase">
            Username
          </label>
          <br />
          <input
            type="text"
            name="username"
            id=""
            className="rounded-lg"
            onChange={handleusername}
            required
          />
          <br />
          <label htmlFor="password" className=" uppercase">
            Password
          </label>
          <br />
          <input
            type="password"
            className="rounded-lg"
            name="password"
            onChange={handlepassword}
            required
          />
          <br />
          <button
            type="submit"
            className="bg-green-500 rounded-md py-1 px-4 block mx-auto mt-2 text-white"
          >
            Sign Up
          </button>
        </form>
        <p className=" text-orange-600">
          <NavLink to="/">I have an account</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
