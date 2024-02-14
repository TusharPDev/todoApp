const express = require("express");
const app = express();
require("./Connection/connection")
app.get("/",(req,res)=>{
    res.send("Hello World")
})


const port = 8001
app.listen(port, ()=>{
    console.log(`Server is listening to ${port}`)
})