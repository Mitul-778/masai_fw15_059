const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{type: String ,required:true,minlength:3,maxlength:30},
    lastName:{type:String,required:false,minlength:3,maxlength:30},
    age:{type:Number,required:true,min:1,max:150},
    email:{type:String,required:true,unique:true},
    profileImage:[{type:String,required:true}],
},{
    timestamps:true,
    versionKey:false,
})

module.exports = mongoose.model("user1",userSchema);