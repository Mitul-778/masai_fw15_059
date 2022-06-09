const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name : { type: String, required: true },
    productId : { type: mongoose.Schema.Types.ObjectId , ref:'product', required: true }
})

const Brand = mongoose.model('brand', brandSchema);

module.exports = Brand;