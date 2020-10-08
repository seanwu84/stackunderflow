const express = require("express");

const apiRouter = require("./api")
const userRouter = require("./user")
const questionsRouter = require('./questions');
const {verifyUser, createCookie} = require("../utils/auth");

const router = express.Router();

router.use("/api", apiRouter);
router.use("/users", userRouter);
router.use("/questions", questionsRouter);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/make-cookie", async (req, res, next) =>{
  const token = await createCookie("Cierra14", res)
  res.send("You got a cookie")
});

router.get("/test-cookie", verifyUser, (req, res, next) =>{
  if(!req.cookies){
    res.send("No cookie found");
    return
  }
  console.log(req.user);
  res.send(req.user.username)
});

router.get("/logout", (req, res) =>{
  deleteCookie(res);
  res.redirect("/")
})

module.exports = router;
