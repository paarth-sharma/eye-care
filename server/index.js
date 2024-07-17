const express=require("express");

const app=express();
const cookieparser=require("cookie-parser")

const cors=require("cors");

const bodyparser=require("body-parser");

require("dotenv").config();
app.use(cors());
app.use(express.json())
app.use(cookieparser());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT=process.env.PORT
app.use(express.urlencoded({extended:false}))
require("./connection/db_connection")

app.use("/user",require("./routes/loginAndSignupRoute"))
app.use("/report",require("./routes/reportRoute"))
app.use("/payment",require("./routes/paymentroutes"))
app.use('/doctor',require('./routes/doctorroutes'))


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})