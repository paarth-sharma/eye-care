const ReportModel = require("../model/reportmodel")
const jwt=require("jsonwebtoken")
const jwt_key=process.env.jWT_SECRET_KEY

const reportCreation=async(req,res)=>{
    try{
        const reportData=req.body
        console.log(reportData)
        const Req_token=reportData?.Token
        // const Req_token=req.cookies
        console.log(Req_token)
        const user_id=jwt.verify(Req_token,jwt_key).payload
        const ReportDocument=await ReportModel.create({prediction:reportData.prediction,user:user_id})
        res.json({
            created:true,
            message:"Report Saved in DataBase"
        })
    }catch(err){
        console.log(err.message)
        res.json({
            message:"Could not create report",
            created:false
        })
    }
}
const repoprtFetch=async(req,res)=>{
    try{
        const reportData=req.body
        console.log(reportData)
        const Req_token=reportData?.Token
        console.log(Req_token)
        const user_id=jwt.verify(Req_token,jwt_key).payload
        const ReportDocuments=await ReportModel.find({user:user_id})
        console.log(ReportDocuments)
        
        // console.log(ReportDocuments)
        const reportarr = ReportDocuments.sort(
            (objA, objB) => Number(objB.createat) - Number(objA.createat),
          );
        //   reportarr.forEach(report => {
        //     report.creationDate=report.createat.getDate(),
        //     report.time=report.createat.getTime()
        //   });
          
        res.json({  
            fetched:true,
            message:"Fetched all the reports",
            reportData:reportarr
        })
    }catch(err){
        console.log(err.message)
        res.json({
            message:"Could not fetch reports",
            fetched:false
        })
    }
}

const updatePaymentStatus=async(req,res)=>{
    try{
        const payment_id=req.params.id
        console.log(req.params)
        console.log(payment_id)
        const UpdatePayment=await ReportModel.findById(payment_id)
        if(!UpdatePayment) throw new Error("Failed to Update")
        UpdatePayment.paid="paid"
        UpdatePayment.save()
        res.json({
            message:"Payment updated",
            updated:true
        })

    }catch(err){
        console.log(err.message)
        res.json({
            message:"Payment status could not be updated",
            updated:true
        })
    }
}

module.exports={reportCreation,repoprtFetch,updatePaymentStatus}