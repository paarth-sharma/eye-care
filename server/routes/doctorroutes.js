const express=require('express')
const { addDoctor, updateDoctorModelObj, addAppointmentList, fetchDoctor, mkaedoctorAppointment } = require('../controllers/doctorcontroller')
const router=express.Router()
router.route('/create').post(addDoctor)
router.route('/update/:doctor_id').patch(updateDoctorModelObj).put(addAppointmentList)
router.route('/update/appointment/:docID').patch(mkaedoctorAppointment)
// router.route('/availability/:doctor_id/:doctor_status').patch(doctorAvailabilityUpdate)
router.route('/fetch/:doctorId').get(fetchDoctor)
module.exports=router
    