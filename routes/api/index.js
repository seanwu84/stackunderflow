const express = require("express");

const apiUsersRouter = require("./users");
const apiQuestionsRouter = require("./questions");
const apiSearchRouter = require("./search")
//const apiVoteRouter = require("./votes")
const router = express.Router();
router.use("/users", apiUsersRouter);
router.use("/questions", apiQuestionsRouter);
router.use("/search", apiSearchRouter);
//router.use("/votes", apiVoteRouter)

module.exports = router;
