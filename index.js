const express = require("express")
const app = express()
const products_route = require("./routes/Products")
const connectDB = require("./db/connectDB")

const PORT = process.env.PORT || 5000


app.get("/", (req, res)=>{res.send("Hey User")})

//middleware to set routes

app.use("/api/products",products_route)

//listening server
const start = async () => {
  try{
    await connectDB();
    app.listen(PORT, ()=>(console.log(`server started at port ${PORT}`)))
  } catch(error){
     console.log(`following error has occured ${error}`)
  }
}

start()


