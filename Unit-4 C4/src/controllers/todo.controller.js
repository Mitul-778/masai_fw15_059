const express= require("express");
const router = express.Router();
const Todo = require("../models/todo.model")
const authenticate = require("../middleware/authenticate");

router.get("",authenticate,async(req,res)=>{
    try {
        const todos= await Todo.find({}).lean().exec();
        return res.status(200).send(todos);
    } catch (error) {
        return  res.status(401).send({message:error.message})
    }
})

router.post("",authenticate,async(req,res)=>{
    req.body.userId= req.user._id
    try {
        const todo= await Todo.create(req.body)
        return res.status(201).send(todo);
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
})

router.get("/:id",authenticate,async(req,res)=>{
    try {
        const todo = await Todo.findById(req.params.id).lean().exec();
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
})

router.patch("/:id",authenticate,async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
})

router.delete("/:id",authenticate,async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
})


module.exports=router
