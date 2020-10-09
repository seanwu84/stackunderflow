const express = require("express");



const apiUsersRouter = require("./users");
const questionsRouter = require("./questions");
const apiSearchRouter = require("./search")
const router = express.Router();


router.use("/users", apiUsersRouter);
router.use("/questions", questionsRouter);
router.use("/search", apiSearchRouter);

module.exports = router;
