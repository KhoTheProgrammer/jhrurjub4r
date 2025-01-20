import React from "react";
import Dashboard from "./Dashboard";
import Change from "./Change"
import Update from "./Update"

const MyAccount = () => {

  return (
    <div className="flex gap-4">
      <Dashboard></Dashboard>
      <div className="flex h-screen items-center justify-center mx-auto">
        <Update></Update>
      </div>
    </div>
  );
};

export default MyAccount;
