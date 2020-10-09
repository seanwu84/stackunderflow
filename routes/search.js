const express = require("express");

const router = express.Router();

router.get("/", (req, res) =>{
    const user = req.user;
    res.render("search", {user, title: "Search Results"})
})



module.exports = router;