const express = require("express");

const apiUsersRouter = require("./users");
const apiQuestionsRouter = require("./questions");
const apiSearchRouter = require("./search")

const router = express.Router();

router.use("/users", apiUsersRouter);
router.use("/questions", apiQuestionsRouter);
router.use("/search", apiSearchRouter);

module.exports = router;
