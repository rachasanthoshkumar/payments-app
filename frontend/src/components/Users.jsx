import React, { useState } from "react";

import Button from "./Button";

const Users = () => {

    const [users,setUsers] = useState([{
        firstName:"santhosh",
        lastName:"Racha"
    }])
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User key={user.firstName} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="rounded-full h-10 w-10 bg-slate-200 flex items-center justify-center mt-1 mr-2">
          <div className=" text-center text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full mt-1">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}

export default Users;
