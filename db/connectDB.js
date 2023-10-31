const mongoose = require("mongoose")

const connectDB = () => {
  return  mongoose
    .connect("mongodb://127.0.0.1:27017/products")
    .then(() => {
      console.log("connected to database");
    }).catch((err)=>{console.log("error occured while connecting to database")});
  
}

module.exports = connectDB