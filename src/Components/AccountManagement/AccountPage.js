import Dashboard from "./Dashboard";
import Delete from "./Delete";
import { useState } from "react";

export default function AccountPage() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div>
      <div className="flex gap-4">
          <Dashboard ></Dashboard>
        <div className="flex h-screen items-center justify-center mx-auto">
          <Delete
            password={password}
            setPassword={setPassword}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
