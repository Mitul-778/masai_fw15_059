const express  = require("express");
const Book = require("../models/book.model")
const upload = require("../middleware/upload")

const User =  require("../models/book.model");
const router = express.Router();


router.post("",upload.single("coverImage"),async(req,res)=>{
    try {
        const book =await Book.create({
            likes:req.body.likes,
            coverImage:req.file.path,
            content : req.body.content
        })
        return res.status(200).send(book)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})



module.exports = router