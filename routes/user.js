const express = require("express");
const {verifyUser, checkLoginDetails, generateNewToken, deleteCookie} = require("../utils/auth");
const { asyncHandler } = require("../utils/utils");
const {User} = require("../db/models")
const {convert} = require("../utils/utils")


const router = express.Router();

router.get("/", asyncHandler(async (req, res, next) =>{
    const user = req.user;
    const users = await User.findAll();
    users.forEach(function(el){
        el.color = convert(el.username);
        const d = new Date(el.createdAt);
        el.displayDate = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
        el.capitalLetter = el.username[0].toUpperCase();
    })
    res.render("users", {users, user})
}))

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