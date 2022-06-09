const express = require('express');
const Category = require('../models/category.model');
const router = express.Router();

router.get('', async(req,res)=>{
    try {
        const categories = await Category.find().populate({ path:"anscester" , select:{"name":1,"_id":0} }).populate({ path:"parentId" , select:{"name":1,"_id":0} }).lean().exec();
        return res.status(200).send(categories);
    } catch (error) {
        return res.status(500).send(error);
    }
})

router.post('/create', async(req,res)=>{
    try {
        const category = await Category.create(req.body);
        return res.status(201).send(category);
    } catch (error) {
        return res.status(500).send(error);
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id).populate({ path:"anscester" , select:{"name":1,"_id":0} }).populate({ path:"parentId" , select:{"name":1,"_id":0} }).lean().exec();
        return res.status(200).send(category);
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.patch('/:id/edit', async(req,res)=>{
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(201).send(category);
    } catch (error) {
        return res.status(500).send(error);
    }
})

module.exports = router