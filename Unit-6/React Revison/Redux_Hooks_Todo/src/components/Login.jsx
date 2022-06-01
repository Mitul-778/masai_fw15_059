import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../Redux/Login/Action";

export const Login = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const isAuth = useSelector((store) => store.user.isAuth);
  const handleSubmit = () => {
    dispatch(login(user, pass));
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <h1>Login</h1>
      <input
        onChange={(e) => {
          setuser(e.target.value);
        }}
        type="text"
        placeholder="User Name"
        name="username"
      />
      <input
        onChange={(e) => {
          setpass(e.target.value);
        }}
        type="password"
        placeholder="Password"
        name="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};
