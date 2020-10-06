const express = require("express");
const {checkToken, checkLoginDetails, generateNewToken} = require("../../utils/auth");

const router = express.Router();

router.post("/", checkLoginDetails, (req, res, next) =>{
    res.json({token: req.newToken})
});

//this sends back the username as a test route
router.get("/test-token", checkToken, (req, res)=>{
    res.send(req.user.username)
})


module.exports = router;