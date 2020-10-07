const express = require("express");
const loginRouter = require("./users-login")
const usersRouter = require("./users")

const router = express.Router();

router.use("/login", loginRouter);
router.use("/users", usersRouter);

module.exports = router;



