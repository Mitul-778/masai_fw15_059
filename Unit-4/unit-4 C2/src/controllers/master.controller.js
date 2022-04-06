//  1.GET API to get all the details of the master account

const express = require("express");
const MasterAcc = require("../models/masteracc.model")
const router = express.Router()

router.get("",async(req,res)=>{
    try {
        const master = await MasterAcc.find().populate({path:"userDetails"}).populate({path:"branchDetail"}).lean().exec();
        return res.status(200).send(master);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports = router;
