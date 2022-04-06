

const express = require("express");
const FixedAcc = require("../models/fixedacc.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try {
        const fixedAcc = await  FixedAcc.create(req.body);
        return res.status(201).send(fixedAcc);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports = router;