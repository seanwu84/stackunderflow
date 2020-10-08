const express = require("express");
const { verifyForBackend } = require("../../utils/auth");
const apiUsersRouter = require("./users")

const router = express.Router();

router.use(verifyForBackend)
router.use("/users", apiUsersRouter);

module.exports = router;



