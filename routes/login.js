const express = require("express");
const {checkToken, checkLoginDetails, generateNewToken} = require("../utils/auth")


const router = express.Router();


router.get("/", checkToken, (req, res, next) =>{
    if(req.user){
        res.redirect("/");
        return;
    }
    res.render("login");
});


module.exports = router;