const express = require("express");
const app = express();
app.use(express.json());

const userController = require("./controller/user.controller");
const bookController = require("./controller/book.controller")

app.use("/register",userController)
app.use("/books",bookController)


module.exports = app