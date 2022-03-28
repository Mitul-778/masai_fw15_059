const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token)=>{
    return new Promise((res,rej)=>{
        jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
            if(err) return rej(err)
            return res(decode)
        })
    })
}


const authenticate = async(req,res,next)=>{
    const head = req.headers.authorization;
    if(!head||!head.startsWith("Bearer ")){
        return res.status(400).send({message:"Authorization failed"})
    }
    const token = req.headers.authorization.trim().split(" ")[1]
    let decode;
    try {
        decode = await verifyToken(token)
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
    req.user= decode.user
    return next();
}


module.exports= authenticate;