const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
   body:{type:String,required:true},
   userId:{type:mongoose.Schema.Types.ObjectId,ref:"user1",required:true},
   bookID : {type:mongoose.Schema.Types.ObjectId ,ref:"book1",required:true}
},{
    timestamps:true,
    versionKey:false,
})

module.exports = mongoose.model("comment1",commentSchema);