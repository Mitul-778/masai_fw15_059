const express = require('express');
const app = express()

const ipAddress = {}
app.use("/", (req,res)=> {
    
    if(ipAddress[req.ip] === undefined) {
        ipAddress[req.ip] = {
            count: 0,
            time: Date.now()
        }

        return res.status(200).json({Data:"Data has been Fetched !"})
    }else{
        if(Date.now() - ipAddress[req.ip].time > 60*1000) {
         
            ipAddress[req.ip] = {
              count: 0,
              time: Date.now(),
            };

            return res.status(200).json({ Data: "Data has been Fetched !" });
        }else{
            if(ipAddress[req.ip].count >= 10){
                const time = 60 - ((Date.now() - ipAddress[req.ip].time)/1000);
                const message = `You have reached the limit of 10 requests per minute. Please try again in ${time} seconds`

                return res.status(429).json({ message});
               
            }else{
                ipAddress[req.ip].count++;
                const { count } = ipAddress[req.ip];
                const message = `You have ${10 - count} requests left`;
               
                return res.status(200).json({Data: "Data has been Fetched !",message})
            }
        }
    }
})


app.listen(5000,()=>{
    console.log('Listening on Port 5000 !')
})




// var rate = 0;

// app.post('/', async (req, res) => {
    // async function isOverLimit(ip) {
    //   try {
    //     rate = rate+1 ;
    //   } catch (err) {
    //     console.error('isOverLimit: could not make request')
    //     throw err
    //   }
    //   console.log(`${ip} has value: ${rate}`)
    //   if (rate > 10) {
    //       setTimeout(()=>{
    //         rate=0;
    //       },1000*60)
    //     return true
    //   }
    // }
    // check rate limit
    // let overLimit = await isOverLimit(req.ip)
    // if (overLimit) {
    //   res.status(429).send('Too many requests for the moment - try again after sometime !')
    //   return
    // }
    // allow access to data
  //   res.send("Accessed the data!")
  // })