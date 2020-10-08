const express = require("express");
const userRouter = require("./user")
const apiRouter = require("./api")
const router = express.Router();

router.use("/api", apiRouter);

router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.render("index");
});



const {verifyForFrontend, createCookie} = require("../utils/auth");
router.get("/make-cookie", async (req, res, next) =>{
  const token = await createCookie("Cierra14", res)
  res.send("You got a cookie")
})
router.get("/test-cookie", verifyForFrontend, (req, res, next) =>{
  if(!req.cookies){
    res.send("No cookie found");
    return
  }
  console.log(req.user);
  res.send(req.user.username)
})





module.exports = router;
