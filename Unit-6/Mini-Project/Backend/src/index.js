const express = require('express');
const app = express();
const connect = require('./config/db')
const cors = require('cors')
const ProductController = require('./controller/Product.controller')
app.use(express.json());
app.use(cors())

app.use('/product',ProductController)

app.listen(5000, async()=>{
    try {
        await connect()
        console.log('Listening on port 5000 !')
    } catch (error) {
        console.log(error)
    }
})

module.exports = app;