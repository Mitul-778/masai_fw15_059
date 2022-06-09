const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name : { type: String, required: true },
    parentId : { type: mongoose.Schema.Types.ObjectId , ref:'category' },
    anscester : [{ type: mongoose.Schema.Types.ObjectId , ref:'category'}]
})

const Category = mongoose.model('category', categorySchema);
module.exports = Category 