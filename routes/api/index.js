const express = require("express");
const apiUsersRouter = require("./users")

const router = express.Router();

router.use("/users", apiUsersRouter);

module.exports = router;



