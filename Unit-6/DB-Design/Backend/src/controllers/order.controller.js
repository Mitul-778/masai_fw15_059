const express = require('express');
const Order = require('../models/order.model');
const router = express.Router();
const mongoose = require('mongoose')

router.get('', async(req,res)=>{
    try {
        const order = await Order.find().populate({path:"userId"}).populate({path:"productIds"}).lean().exec();
        return res.status(200).send({order})
    } catch (error) {
        return res.status(500).send({error})
    }
})

router.post('/create', async(req,res)=>{
    try {
        const order = await Order.create(req.body);
        return res.status(201).send({order});
    } catch (error) {
        return res.status(500).send({error})
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const order = await Order.find({userId:req.params.id}).populate({path:"userId"}).populate({path:"productIds"})
        var userid = mongoose.Types.ObjectId(req.params.id)
        const am = await Order.aggregate([{
            $match:{ userId: userid }
        },{
            $lookup:{
                from:'products',
                localField:'productIds',
                foreignField:'_id',
                as:'data'
            }
        },{
            $project:{ _id:0, 
                total_price:{$sum:'$data.price'}
             }
        }])
        let amount = 0;
        order[0].productIds.forEach(el => {
            amount += el.price
        });
            console.log('amount:', am)
        return res.status(200).json({order,amount});
    } catch (error) {
        console.log('error:', error)
        return res.status(500).send({error});
    }
})

router.patch('/:id/edit', async(req,res)=>{
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(201).send({order});
    } catch (error) {
        return res.status(500).send({error});
    }
})

router.patch('/:id/add/:product', async(req,res)=>{
    try {
        const order = await Order.findOneAndUpdate({userId:req.params.id},{ $push: { productIds: req.params.product } },{new:true})
        return res.status(201).send({order});
    } catch (error) {
        return res.status(500).send({error});
    }
})

module.exports = router