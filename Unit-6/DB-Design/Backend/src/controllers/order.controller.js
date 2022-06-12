const express = require('express');
const Order = require('../models/order.model');
const Product = require('../models/product.model')
const router = express.Router();

router.get('', async(req,res)=>{
    try {
        const order = await Order.find().populate({path:"userId"}).populate({path:"productIds"}).lean().exec();
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
        const order = await Order.find({userId:req.params.id}).populate({path:"userId"}).populate({path:"productIds"})
        let amount = 0;
        order[0].productIds.forEach(el => {
            amount += el.price
        });
            // console.log('amount:', amount)
        return res.status(200).json({order,amount});
    } catch (error) {
        return res.status(500).send(error.message);
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
        const order = await Order.findOneAndUpdate({userId:req.params.id},{ $push: { productIds: req.params.product } },{new:true})
        return res.status(201).send(order);
    } catch (error) {
        return res.status(500).send(error);
    }
})

module.exports = router