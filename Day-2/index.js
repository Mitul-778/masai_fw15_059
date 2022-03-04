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
  console.log('data:', data)
  res.send(data);
 
});
app.get("/books/:Wingsoffire", (req, res) => {
 
 console.log(
  {
  "title":"Wings of Fire",
  "author":"APJ Abdul Kalam",
  "publicationDate":1999

})
 
});
