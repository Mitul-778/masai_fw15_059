const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : { type: String, required:true },
    image : { type: String, required: true },
    price : { type: String, required: true },
    rating : { type: Number, required: true },
    description : { type:String, required:true },
    categoryId : [{ type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true }]
})

const Product = mongoose.model('product', productSchema);
module.exports = Product;