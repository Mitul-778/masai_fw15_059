const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",required:true
    },
    rollId:{type:Number,require:true},
    currentBatch:{type:String,require:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("student",studentSchema)