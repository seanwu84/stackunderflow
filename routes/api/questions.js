const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler } = require("../../utils/utils");
const router = express.Router();
const db = require("../../db/models");
const { Question, Answer, QuestionComment, AnswerComment } = db;

const validateComment = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Comment can't be empty."),
  handleValidationErrors,
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const questions = await Question.findAll();
    res.json({ questions });
  })
);

router.get(
  "/:questionId",
  asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
      where: {
        id: req.params.questionId,
      },
    });
    res.json({ questions });
  })
);

router.get(
  "/:questionId(\\d+)/comments/",
  validateComment,
  asyncHandler(async (req, res) => {
    const questionComments = await QuestionComment.findAll({
      include: [
        {
          model: Question,
          where: {
            id: req.params.questionId,
          },
        },
      ],
    });

    res.json({ questionComments });
  })
);

router.get(
  "/:questionId(\\d+)/answers/:answerId(\\d+)/comments",
  validateComment,
  asyncHandler(async (req, res) => {})
);

router.post(
  "/:questionId(\\d+)/comments",
  validateComment,
  asyncHandler(async (req, res) => {})
);

router.post(
  "/:questionId(\\d+)/answers/:answerId(\\d)/comments",
  asyncHandler(async (req, res) => {})
);

module.exports = router;
