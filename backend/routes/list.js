const require =require("express").Router();
const User = require("../models/user")
const List  = require("../models/list")

router.post("/addTask",async (req,res)=>{
    const {title,body,email} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        const list = new List({email,body,user:existingUser})
        await list.save()
    }
})





module.exports = router;