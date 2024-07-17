const DoctorModel = require("../model/doctormodel")

const addDoctor=async(req,res)=>{
    try{
        const doctorDetailsData=req.body
        const doctorCreatedObj=await DoctorModel.create(doctorDetailsData)
        res.json({
            created:true,
            Doctor_Details:doctorCreatedObj
        })
    }catch(err){
        throw err
    }
}

const doctorAvailabilityUpdate=async(req,res)=>{
    try{
        const doctor_id=req.params.doctor_id
        const status_flag=req.params.doctor_status   // 1 means present and 0 means no present
        const updateDocotorStatus=await DoctorModel.findByIdAndUpdate(doctor_id,{
            present:status_flag==1?true:false
        })
        res.json({
            marked:true,
            updated_doctor:updateDocotorStatus
        })
    }catch(err){
        throw err
    }
}

const mkaedoctorAppointment=async(req,res)=>{
    try{
        const doctor_id=req.params.docID
        console.log(doctor_id)
        const appoitment_data=req.body
        console.log(appoitment_data.time)
        const DocktorObj=await DoctorModel.findById(doctor_id)
        if(!DocktorObj) throw new Error("Failed to find Doctor")
        DocktorObj.daily_appoints.forEach(val => {
            if(val.start_time==appoitment_data.time){
                val.booking_status=true
            }
        });
        DocktorObj.save()
        res.json({
            message:"Appointment Booked",
            time:appoitment_data.time,
            booked:true
        })


    }catch(err){
        console.log(err.message)
        req.json({
            message:"Failed to book appointmnet",
            booked:false
        })
    }
}

const updateDoctorModelObj=async(req,res)=>{
    try{
        const doctor_id=req.params.doctor_id
        console.log(doctor_id)
        const updateDoctorData=req.body
        console.log(updateDoctorData)
        const updatedDoctorObj=await DoctorModel.findByIdAndUpdate(doctor_id,{...updateDoctorData})
        res.json({
            updated:true,
            doctorData:updatedDoctorObj
        })
    }catch(err){
        throw err
    }
}

const addAppointmentList=async(req,res)=>{
    try{
        const doctor_id=req.params.doctor_id
        console.log("Chel reha")
        console.log(req.params)
        const appointmentData=req.body
        console.log(appointmentData)
        const updateDoctor=await DoctorModel.findById(doctor_id)
        console.log(updateDoctor)
        updateDoctor.daily_appoints.push(appointmentData)
        updateDoctor.save()
        res.json({
            appointment_added:true
        })
    }catch(err){
        throw err
    }
}


const fetchDoctor=async(req,res)=>{
    try{
        const doctorId=req.params.doctorId
        const doctorData=await DoctorModel.findById(doctorId)
        if(!doctorData) res.json({doctorFound:false,message:"Doctor does not exist in DB"})
        res.json({doctorFound:true,doctorData:doctorData})
    }catch(err){
        throw err
    }
}

module.exports={addDoctor,mkaedoctorAppointment,doctorAvailabilityUpdate,updateDoctorModelObj,addAppointmentList,fetchDoctor}

