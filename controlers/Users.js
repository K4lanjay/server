const User = require("../Model/Users")

const createUser = async (req, res) => {
  const data =  new User(req.body)
  try{
   const dataToSave = await data.save()
   res.status(200).json({
    data:dataToSave,
    isSuccess:true,
    message:"Account Created Successfully with above details",
   })

  }catch(err){
    return res.json({
        isSuccess:false,
        message:err.message
    })
  }
}

const getUser = async (req, res) => {
  
    const data = await User.find({email : req.body.email})
    
    if(data.length < 1){
      return res.json({
        message:"User not found"
      })
    }
    if(!data.authenticate(req.body.password)){
       return res.status(400).json({
        message:"Invalid credentials"
       })
    }
    return res.status(200).json({
        message:"Sign in successful"
    })
 
}

module.exports = {createUser, getUser}