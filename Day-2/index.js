const express = require("express");
const app = express();
app.listen(5000, () => {
  console.log("Listening to port 5000");
});

app.get("", function (req, res) {
  res.send("Hello User");
});

app.get("/books", (req, res) => {
 
  const data = require("./book.json")  
  res.send(data);
 
});

