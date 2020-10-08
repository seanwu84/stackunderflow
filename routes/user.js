const express = require("express");
const {verifyUser, checkLoginDetails, generateNewToken} = require("../utils/auth")


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


module.exports = router;