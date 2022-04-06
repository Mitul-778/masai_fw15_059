const express= require("express")
const app = express()
app.use(express.json());

const masterController = require("./controllers/master.controller")
const savingController = require("./controllers/saving.controller")
const fixedController = require("./controllers/saving.controller")

app.use("/masters",masterController)
app.use("/saving",savingController)
app.use("/fixed",fixedController)

module.exports=app