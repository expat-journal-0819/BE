const express = require("express");
const router = express.Router();

const authRouter = require("./auth_router");
const usersRouter = require("./users_router");
const storiesRouter = require("./stories_router");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/stories", storiesRouter);

module.exports = router;
