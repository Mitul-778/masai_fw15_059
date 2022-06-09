const express = require('express');
const Order = require('../models/order.model');
const router = express.Router();

router.get('', async(req,res)=>{
    try {
        const order = await Order.find().lean().exec();
        return res.status(200).send(order)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.post('/create', async(req,res)=>{
    try {
        const order = await Order.create(req.body);
        return res.status(201).send(order);
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).lean().exec();
        return res.status(200).send(order);
    } catch (error) {
        return res.status(500).send(error);
    }
})

router.patch('/:id/edit', async(req,res)=>{
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(201).send(order);
    } catch (error) {
        return res.status(500).send(error);
    }
})

router.patch('/:id/add/:product', async(req,res)=>{
    try {
        const order = await Order.findByIdAndUpdate(req.params.id,{ $push: { productIds: req.params.product } },{new:true})
        return res.status(201).send(order);
    } catch (error) {
        return res.status(500).send(error);
    }
})