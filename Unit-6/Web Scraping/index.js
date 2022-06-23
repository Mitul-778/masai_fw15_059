const express = require("express");
const app = express();
const scraping =  require("./puppeteer")
const cors = require('cors')
app.use(express.json())
app.use(cors());

app.get("/data",async(req,res)=>{
    try {
        let result = await scraping();
        res.send(result)
        
    } catch (error) {
        res.send(error.message)
    }
})
app.listen('5000',()=>{
    try {
        console.log("Listening on port 5000 !")
    } catch (error) {
        console.log(error)
    }
})