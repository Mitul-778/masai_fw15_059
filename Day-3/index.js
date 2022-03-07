const express = require("express")
const app = express()

app.listen(5000, ()=>{
console.log("Listening to port 5000")
})

app.get("/books",allBooks,(req,res)=>{
    return res.send("All books")
})

app.get("/book/:name",singleBook, (req,res)=>{
    return res.send({BookName:req.name})
})

function singleBook(req,res,next){
    req.name = req.params.name
    next()
}

function allBooks(req,res,next){
    console.log("Fetching all books");
    next()
}

