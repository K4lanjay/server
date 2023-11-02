const express = require("express")
const app = express()
const products_route = require("./routes/Products")
const user_route = require("./routes/Users")
const connectDB = require("./db/connectDB")

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{res.send("Hey User")})

//middleware to set routes

app.use("/api/products",products_route)
app.use("/api/user", user_route)

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


