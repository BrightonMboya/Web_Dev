import React from "react";
import './userList.css'

const userList = (props) => {
  if (props.users.length === 0) {
    return <h2 className="not-found">No user Found</h2>;
  }
  return (
      <div className="users" >
    <ul>
      {props.users.map((user) => (
        <li key = {user.id}>
          {user.name} ({user.age} years old
        </li>
      ))}
    </ul>
    </div>
  );
};

export default userList;
