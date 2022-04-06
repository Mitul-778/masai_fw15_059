const connect = require("./configs/db");
const app = require("./index");

app.listen(5500,async()=>{
   try {
    await connect();
    console.log("Listening on port 5500");
   } catch (error) {
       console.log(error);
   }
})