const express=require("express")
const router=express.Router()
const { reportCreation, repoprtFetch, updatePaymentStatus } =require("../controllers/reportcontroller")
router.route("/create").post(reportCreation)
router.route("/fetch").post(repoprtFetch)
router.route("/update/:id").patch(updatePaymentStatus)
module.exports=router