const mongoose=require("mongoose")
const docotr_schema=mongoose.Schema({
    Name:{
        type:String,
        default:""
    },
    Qualification:{
        type:String
    },
    Mobileno:{
        type:String,
    },
    Location:{
        type:String
    },
    Email:{
        type:String
    },
    daily_appoints:[{
        start_time:{
            type:String
        },
        booking_status:{
            type:String,
            default:false
        }
    }]
})
const DoctorModel=mongoose.model("DoctorModel",docotr_schema)
module.exports=DoctorModel