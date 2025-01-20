import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col items-start gri">
      <header className="flex flex-row h-10 w-full items-start justify-start bg-red-500 ">HEARDER</header>
      <div className="w-full h-screen items-start justify-start bg-gray-200 flex">
        <div className=" bg-blue-500 h-full w-1/6">
          <NavLink to="/Login" className="p-4 mb-8">Go to Login</NavLink> <br></br>
          <NavLink to="/Signup" className="p-4">Go to Signup</NavLink>
        </div>
        <div className=" w-5/6 text-center text-3xl font-bold bg-yellow-600 h-full">
            <form className="flex flex-col w-1/2 justify-center">
                <label>Username</label>
                <input type="text" className=""></input>
                <label>Password</label>
                <input type="text"></input>
                <button type="submit" className="bg-green-500 p-4">Submit</button>
            </form>
        </div>
      </div>
      <div className="flex flex-row w-full h-20 bg-green-600">FOOTER</div>
    </div>
  );
};
export default Home;
