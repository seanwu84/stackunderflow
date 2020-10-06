const express = require("express");
const {checkToken, checkLoginDetails, generateNewToken} = require("../utils/auth")


const router = express.Router();


router.get("/", (req, res, next) =>{
    res.render("login")
});


module.exports = router;