const mongoose = require("mongoose")

//now we will create schemas
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    list: [{
        type: mongoose.Types.ObjectId,
        ref:"List",
    }]
});

module.exports = mongoose.model("User",userSchema)