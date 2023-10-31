const getAllProducts = async (req, res) => {
   res.status(200).json({message:"all products list"})
}

module.exports = {getAllProducts}