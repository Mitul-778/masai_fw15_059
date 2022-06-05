const express = require('express')
const app = express();
const connect = require('./config/db')
const Neighbour = require('./controller/neighbourhood.controller')
const Restaurant = require('./controller/restaurant.controller')


app.use(express.json())

app.use('/neighbour', Neighbour);
app.use('/restaurant',Restaurant)

app.listen(8000,async()=>{
    try {
        await connect();
        console.log('Listening o port 8000 !')
    } catch (error) {
        console.log(error)
    }
})
