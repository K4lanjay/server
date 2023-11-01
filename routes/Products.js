const express = require("express")
const router = express.Router()
const { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct } = require("../controlers/Products")

router.route("/").get(getAllProducts)
router.route("/").post(createProduct)
router.route("/:id").get(getProduct)
router.route("/:id").patch(updateProduct)
router.route("/:id").delete(deleteProduct)

module.exports = router;

