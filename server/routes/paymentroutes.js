const express=require("express")
const router=express.Router()
const { paymentCheckout } = require("../controllers/paymentcontroller")
router.route("/create").post(paymentCheckout)

module.exports=router