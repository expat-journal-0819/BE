const express = require("express");
const router = express.Router();

const { updateUser, deleteUser } = require("../controllers/users_controller");
const {
  validateToken,
  hashPassword
} = require("../middleware/auth_middleware");

router.route("/").put(validateToken, hashPassword, updateUser);

router.route("/delete/:id").delete(validateToken, deleteUser);

module.exports = router;
