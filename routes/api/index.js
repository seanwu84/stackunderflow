const express = require("express");
const { verifyUser } = require("../../utils/auth");
const apiUsersRouter = require("./users")

const router = express.Router();

router.use(verifyUser)
router.use("/users", apiUsersRouter);

module.exports = router;



