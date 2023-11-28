const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productName:{
        type: String,
        required:true,
    },
    category:{
        type:String,
        enum:{
            values:["electronics", "furniture", "clothes", "food & beverage"],
            message: "value not supported" 
        }
    },
    price:{
        type:String,
        required:true
    },
    rating:{
        type:String
    },
    bestseller:{
        type:Boolean,
        default:false,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
},{timestamps:true})

module.exports = mongoose.model('Product', ProductSchema)