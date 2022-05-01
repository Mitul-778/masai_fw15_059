import React, { useState } from "react";

export const Login = ({ handleLogin }) =>{
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        let payload = { email , password };
        handleLogin(payload)
    }

    return (
        <>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="submit"/>
        </form>
        </>
    )
}