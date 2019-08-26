const express = require("express");
const router = express.Router();

const { updateUser, deleteUser } = require("../controllers/users_controller");
const { validateToken } = require("../middleware/auth_middleware");

router.route("/").put(validateToken, updateUser);

router.route("/delete/:id").delete(validateToken, deleteUser);

module.exports = router;
