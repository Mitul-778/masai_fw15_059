const mongoose = require('mongooose')

const reviewsSchema = new mongoose.Shema({
    review : { type: String, required: true },
    productId : { type : mongoose.Schema.Types.ObjectId , ref: 'product', required:true },
    userId : { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
})

const Reviews = mongoose.model('reviews', reviewsSchema);
module.exports = Reviews