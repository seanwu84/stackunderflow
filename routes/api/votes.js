const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler } = require("../../utils/utils");
const router = express.Router();
const db = require("../../db/models");
const { check } = require('express-validator');

const { User, Question, Answer, QuestionComment, AnswerComment, AnswerVote, QuestionVote, sequelize } = db;

// router.get("/", (req, res) => {
//     res.render("vote");
// });

router.get('/', asyncHandler(async (req, res, next) => {
    const questionVotes = await Question.findOne({
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
    });

    const answerVotes = await Answer.findOne({
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
    });
    res.json(questionVotes, answerVotes)
}));


router.get('/questionvotestatus', asyncHandler(async(req, res) => {
    const questionVoteStatus = await QuestionVote.findOne({
        where: userId = 'userId'
    });
   res.json({ questionVoteStatus })
}));

router.get('/answervotestatus', asyncHandler(async (req, res) => {
    const answerVoteStatus = await QuestionVote.findOne({
        where: userId = 'userId'
    });
    res.json({ answerVoteStatus })
}));


router.post('/questionvote', asyncHandler(async (req, res) => {
  const { questionId, userId, value } = req.body;
  const questionVote = await QuestionVote.create(questionId, userId, value)
  res.json({ questionVote })
}));

router.post('/answervote', asyncHandler(async (req, res, next) => {
    const { questionId, userId, value } = req.body;
    const answerVote = await QuestionVote.create(questionId, userId, value)
    res.json({ answerVote })

}));



module.exports = router;