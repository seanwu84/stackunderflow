const express = require("express");
const { verifyUser } = require("../../utils/auth");



const apiUsersRouter = require("./users");
const questionsRouter = require("./questions");
const apiSearchRouter = require("./search")
const router = express.Router();

router.use(verifyUser);
router.use("/users", apiUsersRouter);
router.use("/questions", questionsRouter);
router.use("./search", apiSearchRouter);

module.exports = router;
