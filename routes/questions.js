const express = require('express');

const { asyncHandler, csrfProtection } = require('../utils/utils');
const { Question, Answer, User, sequelize } = require('../db/models');

const router = express.Router();

router.get("/", (req, res) =>{
  const user = req.user;
  res.render("search", {user, title: "Most Popular Questions"})
})

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  const question = await Question.findOne({
    where: id,
    attributes: {
      include: [
        [
          sequelize.literal(`(
                    SELECT COALESCE(SUM(qv.value), 0)
	                  FROM "QuestionVotes" AS qv
	                  WHERE
                    qv."questionId" = "Question".id
                )`),
          'score'
        ],
      ]
    },
    include: [{
      model: User
    }],
  });

  questionData = {
    id: question.id,
    title: question.title,
    content: question.content,
    posted: question.createdAt.toString(),
    score: question.dataValues.score,
    user: {
      username: question.User.username
    }
  }

  const answers = await Answer.findAll({
    where: {
      questionId: question.id
    },
    attributes: {
      include: [
        [
          sequelize.literal(`(
                    SELECT COALESCE(SUM(av.value), 0)
	                  FROM "AnswerVotes" AS av
	                  WHERE
                    av."answerId" = "Answer".id
                )`),
          'score'
        ],
      ]
    },
    include: [{
      model: User
    }],
    order: [
      [sequelize.literal('score'), 'DESC']
    ],
    limit: 5,
    offset: 0
  });

  answerData = answers.map(answer => {
    return {
      id: answer.id,
      content: answer.content,
      posted: answer.createdAt.toString(),
      score: answer.dataValues.score,
      user: {
        username: answer.User.username
      }
    }
  });
  if(req.user){
    req.user.hashedPassword = 0000;
  }

  res.render('question', {
    question: questionData,
    answers: answerData,
    user: req.user
  });
}));

router.get('/ask', csrfProtection, (req, res, next) => {
  if (!req.user) {
    res.redirect('/users/login');
  }
  res.render('ask-question', {
    csrfToken: req.csrfToken(),
    user: {
      id: req.user.id,
      username: req.user.username,
      color: req.user.color,
      capitalLetter: req.user.capitalLetter
    }
  });
});

module.exports = router;