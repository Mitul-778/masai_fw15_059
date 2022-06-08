const express = require('express');
const app = express();
const connect = require('./config/db')
const UserController = require('./controllers/user.controller')
app.use(express.json());

app.use('/users',UserController)


app.listen(5000,async()=>{
    try {
        await connect();
        console.log('Listening on Port 5000 !')
    } catch (error) {
        console.log(error)
    }
})