const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("../controllers/auth_controller");
const {
  checkRequiredFields,
  hashPassword
} = require("../middleware/auth_middleware");

router.route("/login").post(checkRequiredFields, loginUser);

router.route("/register").post(checkRequiredFields, hashPassword, registerUser);

module.exports = router;
