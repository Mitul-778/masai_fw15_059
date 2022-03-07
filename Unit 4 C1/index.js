const express = require("express")
const app = express();
app.listen(6500,()=>{
    console.log("Listening to port 6500")
})

app.get("/books",logger,(req,res)=>{
     res.send({route: "/books"})
})

app.get("/libraries",logger,checkPermission("librarian"),(req,res)=>{
    return res.send({ route: "/libraries", permission:req.permission})
})

app.get("/authors",logger,checkPermission("author") ,(req,res)=>{
    return res.send({ route: "/authors", permission: req.permission})
})

function logger(req,res,next){
    console.log(req.path)
    next()
}

function checkPermission(user){
    return function log(req,res,next){
        if(user=="librarian"){
            req.permission=true;
            next()
        }else if(user=="author"){
            req.permission=true;
            next()
        }else{
            res.send("Not Allowed")
        }
    }
}
