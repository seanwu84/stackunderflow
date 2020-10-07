const express = require("express");
const {checkToken, checkLoginDetails, generateNewToken} = require("../utils/auth")


const router = express.Router();


router.get("/login", checkToken, (req, res, next) =>{
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