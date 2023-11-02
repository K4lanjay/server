const express = require("express")
const router = express.Router()
const {createUser, getUser} = require("../controlers/Users")

router.route("/signin").get(getUser)
router.route("/signup").post(createUser)

module.exports = router