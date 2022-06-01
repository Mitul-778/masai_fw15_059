import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Login/Action";

export default function Profile() {
  const dispatch = useDispatch();

  const { userDetails } = useSelector((store) => store.user);
  const { todos } = useSelector((state) => state.todo);
  console.log("todos:", todos);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>
        <div>
          <h3>Name: {userDetails.name}</h3>
          <h4>Email: {userDetails.email}</h4>
          <h4>Mobile: {userDetails.mobile}</h4>
          <h4>Username: {userDetails.username}</h4>
          <h4>Description: {userDetails.description}</h4>
        </div>

        <br />
        <br />

        <div id="todoscountProfile">
          <div>All - {todos.length} </div>
          <div>
            Personal - {todos.filter((items) => items.tags.personal).length}
          </div>
          <div>
            Official - {todos.filter((items) => items.tags.official).length}
          </div>
          <div>
            Others - {todos.filter((items) => items.tags.others).length}
          </div>
        </div>
        <br />
        <br />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
