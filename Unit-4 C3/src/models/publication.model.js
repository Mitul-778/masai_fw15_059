const mongoose = require("mongoose");

const publicSchema = new mongoose.Schema({
   name:{type:String,required:true},
   bookID : {type:mongoose.Schema.Types.ObjectId,ref:"book1",required:true}
},{
    timestamps:true,
    versionKey:false,
})

module.exports = mongoose.model("public1",publicSchema);