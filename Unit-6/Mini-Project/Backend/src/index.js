const express = require('express');
const app = express();
const connect = require('./config/db')
const cors = require('cors')
app.use(express.json());
app.use(cors())



app.listen(5000, async()=>{
    try {
        await connect()
        console.log('Listening on port 5000 !')
    } catch (error) {
        console.log(error)
    }
})

module.exports = app;