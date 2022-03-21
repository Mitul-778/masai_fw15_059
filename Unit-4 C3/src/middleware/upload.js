const path = require("path");
const multer =require("multer");

const req =require("express/lib/request");

const upload = multer({ 
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5,
    }
 })