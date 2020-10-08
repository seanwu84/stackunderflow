const express = require("express");
const {verifyForBackend, checkLoginDetails, generateNewToken, verifyForFrontend} = require("../utils/auth")


const router = express.Router();


router.get("/login", verifyForFrontend, (req, res, next) =>{
    if(req.user){
        res.redirect("/");
        return;
    }
    res.render("login");
});

router.get("/sign-up", (req, res) => {
    res.render("sign-up");
  });


module.exports = router;