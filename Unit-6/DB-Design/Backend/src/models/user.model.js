const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : { type: String, required:true },
    lastName : { type: String, required:true },
    email : { type: String, required:true },
    mobile : { type : Number, required : true },
    gender : { type: String, required: true },
    addresses : [{
        type: { type: String, required: false , default:'Home'},
        houseNo: { type: String, required: false },
        line_1: { type: String, required: true },
        line_2: { type: String, required: false },
        city: { type: String, required: true },
        pincode: { type: String, required: true },
        country: { type: String, required: true }
    }]
}) 

const User = mongoose.model('user',userSchema)

module.exports = User;