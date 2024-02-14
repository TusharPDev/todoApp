//now we are creating Api's for user sign up functionality
const router = require("express").Router();
const User = require("../models/user")

//here we are creating signup functionality
router.post("/register", async (req,res)=>{
    try {
        //here we are requesting data from body itself
        const {email,username,password} = req.body; 

        //here we are telling database that whenever someone wll come to the signup page
        // will be a new user always.
        
        //and we send data like this "{email,username,password}" cause mongo db works with obj's
        const user = new User({email,username,password}); 

        await user.save().then(() => res.status(200).json({ user: user }));
    } catch (error) {
        res.status(400).json({message:"User Already registered"});
    }
});

router.post("/login", async (req,res)=>{

})

module.exports = router;