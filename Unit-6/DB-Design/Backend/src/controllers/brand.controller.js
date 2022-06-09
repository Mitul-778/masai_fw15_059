const express = require('express');
const Brand = require('../models/brand.model')
const router = express.Router();

// get all brands
router.get('', async(req,res)=>{
    try {
        const brand = await Brand.find().populate({ path:"productId" , populate:{ path:"categoryId" , populate:[{path:"parentId",select:{"name":1}},{path:"anscester",select:{"name":1}}]} }).lean().exec();
        return res.status(200).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})

// create a brand
router.post('/create', async(req,res)=>{
    try {
        const brand = await Brand.create(req.body);
        return res.status(201).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})

// get single brand
router.get('/:id', async(req,res)=>{
    try {
        const brand = await Brand.findById(req.params.id).populate({ path:"productId" , populate:{ path:"categoryId" , populate:[{path:"parentId",select:{"name":1}},{path:"anscester",select:{"name":1}}]} }).lean().exec();
        return res.status(200).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})

// edit a brand
router.patch('/:id/edit', async(req,res)=>{
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body,{ new:true }).populate({ path:"productId" , populate:{ path:"categoryId" , populate:[{path:"parentId",select:{"name":1}},{path:"anscester",select:{"name":1}}]} });
        return res.status(201).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})

module.exports = router