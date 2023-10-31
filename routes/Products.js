const express = require("express")
const router = express.Router()
const { getAllProducts } = require("../controlers/Products")

router.route("/").get(getAllProducts)

module.exports = router;

