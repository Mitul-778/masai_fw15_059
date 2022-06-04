const express = require('express')
const app = express();
const connect = require('./config/db')


app.use(express.json())

app.listen(8000,async()=>{
    try {
        await connect();
        console.log('Listening o port 8000 !')
    } catch (error) {
        console.log(error)
    }
})
