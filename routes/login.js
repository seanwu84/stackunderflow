const express = require("express");
const {checkToken, checkLoginDetails, generateNewToken} = require("../utils/auth")


const router = express.Router();


router.get("/", (req, res, next) =>{
    res.render("login")
});

router.post("/", checkLoginDetails, (req, res, next) =>{
    res.json({token: req.newToken})
});

//this sends back the username
router.get("/test-token", checkToken, (req, res)=>{
    res.send(req.user.username)
})


module.exports = router;