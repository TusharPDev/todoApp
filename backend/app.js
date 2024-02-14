const express = require("express");
const app = express();
const auth = require("./routes/auth")
app.use(express.json());//after doing this we can send data from backend to frontend
require("./Connection/connection")




app.get("/",(req,res)=>{
    res.send("Hello World")
})



app.use("/api/v1",auth)
const port = 8001
app.listen(port, ()=>{
    console.log(`Server is listening to ${port}`)
})