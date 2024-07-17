const mongoose=require("mongoose")
const user_schema=mongoose.Schema({
    Name:{
        type:String,
        default:""
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true 
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:"user"
    },
    mobile_no:{
        type:String,
    },
    blood_type:{
        type:String,
    }
})
const UserModel=mongoose.model("UserModel",user_schema)
module.exports=UserModel