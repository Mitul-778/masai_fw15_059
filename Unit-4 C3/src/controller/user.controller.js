const express  = require("express");
const {body,validationResult} = require("express-validator");

const User =  require("../models/user.model");
const router = express.Router();


router.post("",
body("firstName").trim().not().isEmpty().withMessage("FirstNAme cannot be empty").isLength({min:3,max:30}).withMessage("First name must be atleat 3 char"),
body("lastName").trim().not().isEmpty().withMessage("FirstNAme cannot be empty").isLength({min:3,max:30}).withMessage("First name must be atleat 3 char"),
body("age").not().isEmpty().withMessage("age cannot be empty").isNumeric().withMessage("age must be between 1 to 150").custom((val)=>{
    if(val < 1|| val > 150){
        throw new Error("Incorrect age provided")
    }
    return true;
}),body("email").not().isEmpty().withMessage("Email cannot be empty").custom((val)=>{
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if(!val.match(emailRegex)){
        throw new Error("Not a valid Email");
    }
    return true;
})
,async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const user = await User.create(req.body);
          return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router