const express = require("express");

const router = express.Router();

router.get("/", (req, res) =>{
    res.json(JSON.stringify({message: "yay!"}))
});


module.exports = router;

