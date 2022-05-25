const express = require('express');
const app = express()

var rate = 0;

app.post('/', async (req, res) => {
    async function isOverLimit(ip) {
      try {
        rate = rate+1 ;
      } catch (err) {
        console.error('isOverLimit: could not make request')
        throw err
      }
      console.log(`${ip} has value: ${rate}`)
      if (rate > 10) {
          setTimeout(()=>{
            rate=0;
          },1000*60)
        return true
      }
    }
    // check rate limit
    let overLimit = await isOverLimit(req.ip)
    if (overLimit) {
      res.status(429).send('Too many requests for the moment - try again after sometime !')
      return
    }
    // allow access to data
    res.send("Accessed the data!")
  })

app.listen(5000,()=>{
    console.log('Listening on Port 5000 !')
})