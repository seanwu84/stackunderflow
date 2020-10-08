const express = require('express');

const { asyncHandler } = require('../utils/utils');
const { Question, Answer, QuestionVote, AnswerVote, sequelize } = require('../db/models');

const router = express.Router();

const countVotes = (votes) => {
  return votes.map()(vote => vote.value).reduce((acc, vote) => acc + vote, 0);
}

router.get('/', asyncHandler(async (req, res, next) => {
  const questions = await sequelize.query("SELECT ")
  const questions = await Question.findAll({
    include: [{
      model: QuestionVote,
      
    }]
  });
  console.log(questions);
  res.send("HEllo");
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  // const question = await Question.findOne({
  //   where: id,
  //   include: [{
  //     model: User
  //   }, {
  //     model: Answer,
  //     limit: 50,
  //     order: []
  //     include: [{ model: AnswerVote }]
  //   }, {
  //     model: QuestionVote
  //   }]
  // });

  // console.log(question);
  // console.log(question.User);
  // console.log(question.QuestionVotes);
  // const questionScore = countVotes(question.QuestionVotes);
  // console.log(questionScore);
  // questionData = {
  //   id: question.id,
  //   title: question.title,
  //   content: question.content,
  //   posted: question.createdAt,
  //   votes: questionScore,
  //   user: question.User
  // }
  // answerData = question.Answers.map(answer => {
  //   {
  //     id: answer.id,

  //   }
  // })
  // }
  res.render('question', {
    questionData
  });
}));

module.exports = router;