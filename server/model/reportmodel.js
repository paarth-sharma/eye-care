const mongoose=require("mongoose")
const report_schema=mongoose.Schema({
    createat:{
        type:Date,
        default:new Date()
    },
    user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"UserModel"
    },
    prediction:{
        type:String,
        required:true
        
    },
    paid:{
        type:String,
        enum:['paid','notpaid'],
        default:"notpaid"
    }
})
const ReportModel=mongoose.model("ReportModel",report_schema)
module.exports=ReportModel