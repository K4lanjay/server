const User = require("../Model/Users")
const jwt = require("jsonwebtoken")
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
    if(!User.authenticate(req.body.password, data[0].salt, data[0].password)){
       return res.status(400).json({
        message:"Invalid credentials"
       })
    }

    const token = jwt.sign({_id:data[0].token}, process.env.SECRET_KEY)
    res.cookie("token", token, {expire:{}})
    return res.status(200).json({
        user:data,
        token:token,
        message:"Sign in successful"
    })
 
}

const signOutUser = async (req, res) => {
    res.clearCookie("token")
    return res.json({
      message:"sign out successfull"
    })
}

module.exports = {createUser, getUser, signOutUser}