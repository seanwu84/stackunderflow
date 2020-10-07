const express = require("express");
const userRouter = require("./user")
const apiRouter = require("./api")
const router = express.Router();

router.use("/api", apiRouter);

router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.render("index");
});





module.exports = router;
