const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema({
    userDetails:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
    },
    balance:{type:Number,required:true},
    branchDetail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branchDetail",
        required:true
    }
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("masterAcc",masterSchema);