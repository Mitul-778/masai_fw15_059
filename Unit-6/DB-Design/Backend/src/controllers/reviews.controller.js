const express = require('express');
const Reviews = require('../models/reviews.model')
const router = express.Router();

router.get('', async(req,res)=>{
    try {
        const reviews = await Reviews.find().populate({path:"productId"}).populate({path:"userId"}).lean().exec();
        return res.status(200).send({reviews});
    } catch (error) {
        return res.status(500).send({error})
    }
})

router.post('/create', async(req,res)=>{
    try {
        const review = await Reviews.create(req.body);
        return res.status(201).send({review});
    } catch (error) {
        return res.status(500).send({error});
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const review = await Reviews.find({productId:req.params.id}).populate({path:"productId"}).populate({path:"userId"}).lean().exec();
        return res.status(200).send({review});
    } catch (error) {
        return res.status(500).send({error});
    }
})

router.patch('/:id/edit', async(req,res)=>{
    try {
        const review = await Reviews.findByIdAndUpdate(req.params.id,req.body,{ new:true });
        return res.status(201).send({review});
    } catch (error) {
        return res.status(500).send({error});
    }
})

router.get('/:id/product', async(req,res)=>{
    try {
        const reviews = await Reviews.find({productId:req.params.id}).populate({path:"productId"}).populate({path:"userId"}).lean().exec();
        return res.status(200).send({reviews});
    } catch (error) {
        return res.status(500).send({error});
    }
})

module.exports = router;