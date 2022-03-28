const express = require("express");
const {register,login}= require("./controllers/user.controller")
const todoController = require("./controllers/todo.controller")
const app = express();
app.use(express.json())

app.use("/register",register);
app.use("/login",login)
app.use("/todo",todoController);

module.exports=app;