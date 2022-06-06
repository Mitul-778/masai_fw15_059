const express = require('express');
const Product = require('../model/Product.model');
const router = express.Router();

router.post('/', async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router