const express = require('express');

const { asyncHandler } = require('../utils/utils');
const { Question, Answer, QuestionVote, AnswerVote, User, sequelize } = require('../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
  const questions = await Question.findAll({
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
    order: [
      [sequelize.literal('score'), 'DESC']
    ],
    limit: 50,
    offset: 0
  });

  questionData = questions.map(question => {
    return {
      id: question.id,
      title: question.title,
      content: question.content,
      posted: question.createdAt.toString(),
      score: question.dataValues.score,
      user: {
        username: question.User.username
      }
    }
  });

  res.render('questions', {
    questions: questionData
  });
}));

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
    attributes: {
      where: {
        questionId: question.id
      },
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

  res.render('question', {
    question: questionData,
    answers: answerData,
    user: req.user ? {
      id: req.user.id,
      username: req.user.username
    } : null
  });
}));

module.exports = router;