const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId : { type: mongoose.Schema.Types.ObjectId, ref:'user', required:true },
    productIds : [ { type:mongoose.Schema.Types.ObjectId, ref:'product', required:true } ] 
})

const Order = mongoose.model('order', orderSchema);
module.exports = Order;