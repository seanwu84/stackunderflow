const express = require("express");
const { checkLoginDetails, generateNewToken, deleteCookie} = require("../utils/auth")


const router = express.Router();


router.get("/login", (req, res, next) =>{
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