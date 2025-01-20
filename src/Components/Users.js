import { useState, useEffect } from "react";
import { UserService } from "./User";
import Signup from "./Signup";

export default function Users() {
  const [users, setUsers] = useState([]);
  const userService = new UserService();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const usersData = await userService.getUsers();
    setUsers(usersData);
  };

  const updateUserList = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="p-4 flex">
      <Signup updateUserList={updateUserList} />
      <div className=" w-full">
        <div className="flex">
          <h2 className="text-xl font-bold mb-8">Users {users.length}</h2>
          <p className="text-xl font-bold mb-8 float-right ml-auto">Add User</p>
        </div>

        <div className="border-solid border grid grid-cols-4 p-4">
          <div className="mb-3 font-">
            <h3 className="font-bold text-xl">USERNAME</h3>
          </div>
          <div className="mb-3 font-">
            <h3 className="font-bold text-xl">FIRST NAME</h3>
          </div>
          <div className="mb-3 font-">
            <h3 className="font-bold text-xl">LAST NAME</h3>
          </div>
          <div className="mb-3 font-">
            <h3 className="font-bold text-xl">EMAIL</h3>
          </div>
          {users.map((user) => (
            <div key={user.password} className="mb-3 font-">
              <h3>{user.username}</h3>
              <h3>{user.fname}</h3>
              <h3>{user.lname}</h3>
              <h3>{user.email}</h3>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
