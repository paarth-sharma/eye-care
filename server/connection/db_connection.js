require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
const dbconnection = mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    dbName: "EV_Station_Finder",
  }).then(
  () => {
    console.log("db has connected");
  }
);
module.exports = dbconnection;