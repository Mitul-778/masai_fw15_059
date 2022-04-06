//  2.POST API for the user to create a SavingsAccount

const express = require("express");
const SavingAcc = require("../models/savingacc.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try {
        const savingAcc = await  SavingAcc.create(req.body);
        return res.status(201).send(savingAcc);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports = router;