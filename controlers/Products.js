const Product = require("../Model/Products")

const createProduct = async (req, res) => {
    const data = new Product(req.body)
      //{
   //    productName: req.body.productName,
   //    category: req.body.category,
   //    price: req.body.price,
   //    rating: req.body.rating,
   //    bestseller: req.body.bestseller
   // }
  

   try {
      const dataToSave = await data.save()
      res.status(200).json(dataToSave)
   } catch (error) {
      res.status(400).json({ message: error.message })
   }
}


const getAllProducts = async (req, res) => {
   try {
      const data = await Product.find(req.query)
      if(data.length < 1){
         res.status(200).json({
            data:data,
            totalRecordCount:0,
            isSuccess:true,
            message:"Product List is Empty"
         })
      }
      res.status(200).json({
         data:data,
         totalRecordCount:data.length,
         isSuccess:true,
         message:"All product List"
      })
   } catch (error) {
      res.json({ 
         message: error.message })
   }
}

const getProduct = async (req, res) => {
   try {
      const data = await Product.findById(req.params.id)
      if(!data){
         res.status(200).json({
            data:[],
            totalRecordCount:data.length,
            Success:true,
            message:"No record found"
         })
      }
      res.status(200).json({
         data:data,
         isSucces:true,
      })
   } catch (error) {
      res.json({ message: error.message })
   }
}

const updateProduct = async (req, res) => {
   try {
      const id = req.params.id
      const updatedData = req.body
      const options = { new: true }

      const result = await Product.findByIdAndUpdate(id, updatedData, options)

      res.status(200).json({
         data:result,
         isSucces:true
      })
   } catch (error) {
      res.json({ message: error.message })
   }
}

const deleteProduct = async (req, res) => {
   try {
      const id = req.params.id;
      const data = await Product.findByIdAndDelete(id)

      res.status(200).json( {isSucces:true,
         message:` ${data.productName} has been deleted..`})

   } catch (error) {
      res.json({ message: error.message })
   }
}


module.exports = { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct }