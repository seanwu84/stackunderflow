const express = require("express");
const {verifyUser, checkLoginDetails, generateNewToken, deleteCookie} = require("../utils/auth")


const router = express.Router();


router.get("/login", verifyUser, (req, res, next) =>{
    if(req.user){
        res.redirect("/");
        return;
    }
    res.render("login");
});

router.get("/signup", (req, res) => {
    res.render("sign-up");
  });

  router.get("/logout", (req, res) =>{
      deleteCookie(res);
      res.redirect("/")
  })


module.exports = router;