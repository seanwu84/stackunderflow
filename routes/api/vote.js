const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler } = require("../../utils/utils");
const router = express.Router();
const db = require("../../db/models");
const { User, Question, Answer, QuestionComment, AnswerComment, AnswerVote, QuestionVote, sequelize } = db;

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
}));