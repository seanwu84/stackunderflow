const express = require("express");

const apiRouter = require("./api");
const userRouter = require("./user");
const searchRouter = require("./search");
const questionsRouter = require('./questions');

const router = express.Router();

router.use("/api", apiRouter);
router.use("/users", userRouter);
router.use("/questions", questionsRouter);
router.use("/search", searchRouter);

router.get("/", (req, res) => {
  if(req.user){
    res.redirect("/questions");
    return;
  }
  res.render("index");
});

module.exports = router;
