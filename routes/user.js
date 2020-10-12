const express = require("express");
const {verifyUser, checkLoginDetails, generateNewToken, deleteCookie} = require("../utils/auth");
const { asyncHandler } = require("../utils/utils");
const {User, Question, Answer, QuestionComment, AnswerComment} = require("../db/models")
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

  router.get("/:id(\\d+)", asyncHandler(async(req, res, next)=>{
      const user = req.user;
      const profileUser = await User.findByPk(req.params.id)
      const questions = await Question.findAll({where:{userId:req.params.id}});
      const answers = await Answer.findAll({where:{userId:req.params.id}});
      const questionComments = await QuestionComment.findAll({where:{userId:req.params.id}});
      const answerComments = await AnswerComment.findAll({where:{userId:req.params.id}});
      profileUser.color = convert(profileUser.username);
      profileUser.capitalLetter = profileUser.username[0].toUpperCase();
      const commentNumber = questionComments.length + answerComments.length;
      const profileInfo = {questionNumber: questions.length, answerNumber: answers.length, commentNumber:commentNumber, questions}
      res.render("userProfile", {user, profileInfo, profileUser})

  }))




module.exports = router;

