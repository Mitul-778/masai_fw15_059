const express = require('express');
const User = require('../models/user.model')
const router = express.Router();

// get all users
router.get('',async(req,res)=>{
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// create a user
router.post('/create', async(req,res)=>{
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})

//get single user
router.get('/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exec()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// edit single user
router.patch('/:id/edit', async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{ new: true }).lean().exec();
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// get single user addresses
router.get('/:id/addresses', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// create or add a new address of a user
router.patch('/:id/addresses/create', async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{ $push: { addresses: req.body } },{new:true});
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// edit address of a user 
router.patch('/:id/addresses/:idx/edit', async(req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id},{ $set: {[`addresses.${req.params.idx}`]: req.body}}, {new:true})
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})







module.exports = router;