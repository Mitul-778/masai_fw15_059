const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

// get all products
router.get('', async(req,res)=>{
    try {
        const products = await Product.find().populate({ path:"categoryId" , select:{"name":1,"_id":0},populate:[{path:"parentId",select:{"name":1,"_id":0}},{path:"anscester",select:{"name":1,"_id":0}}] }).lean().exec();
        return res.status(200).send(products)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// create a product
router.post('/create', async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// get single product
router.get('/:id',async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id).populate({ path:"categoryId" , select:{"name":1,"_id":0},populate:[{path:"parentId",select:{"name":1,"_id":0}},{path:"anscester",select:{"name":1,"_id":0}}] }).lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// update single product
router.patch('/:id/edit', async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new:true }).populate({ path:"categoryId" , select:{"name":1,"_id":0},populate:[{path:"parentId",select:{"name":1,"_id":0}},{path:"anscester",select:{"name":1,"_id":0}}] });
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router