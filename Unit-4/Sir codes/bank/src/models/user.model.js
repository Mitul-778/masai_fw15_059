const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:false,default:"Female"},
    type:{type:String,required:false,default:"customer"}
},
{
    versionKey: false,
    timestamps: true,
})

const User = mongoose.model("user",userSchema)

module.exports = User
