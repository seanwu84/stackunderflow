const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler } = require("../../utils/utils");
const router = express.Router();
const db = require("../../db/models");
const { User, Question, Answer, QuestionComment, AnswerComment } = db;

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
  "/:questionId(\\d+)",
  asyncHandler(async (req, res) => {
    const questions = await Question.findOne({
      where: {
        id: req.params.questionId,
      },
    });
    res.json({ questions });
  })
);

router.get(
  "/:questionId(\\d+)/comments",
  asyncHandler(async (req, res) => {
    const questionComments = await QuestionComment.findAll({
      where: {
        questionId: req.params.questionId,
      },
      include: User,
    });

    res.json({ questionComments });
  })
);

router.get(
  "/:questionId(\\d+)/answers",
  asyncHandler(async (req, res) => {
    const answers = await Answer.findAll({
      include: [
        {
          model: Question,
          where: {
            id: req.params.questionId,
          },
        },
      ],
    });

    res.json({ answers });
  })
);

router.get(
  "/:questionId(\\d+)/answers/:answerId(\\d+)",
  asyncHandler(async (req, res) => {
    const answers = await Answer.findOne({
      where: { id: req.params.answerId },
      include: [
        {
          model: Question,
          where: {
            id: req.params.questionId,
          },
        },
      ],
    });

    res.json({ answers });
  })
);

router.get(
  "/:questionId(\\d+)/answers/:answerId(\\d+)/comments",
  asyncHandler(async (req, res) => {
    const answerComments = await AnswerComment.findAll({
      where: {
        answerId: req.params.answerId,
      },
      include: User,
    });
    res.json({ answerComments });
  })
);

router.post(
  "/:questionId(\\d+)/comment",
  validateComment,
  asyncHandler(async (req, res) => {
    const { content } = req.body;
    const questionComment = await QuestionComment.create({
      content,
      userId: req.user.id,
      questionId: req.params.questionId,
    });
    res.json({ questionComment });
  })
);

router.post(
  "/:questionId(\\d+)/answers/:answerId(\\d)/comment",
  validateComment,
  asyncHandler(async (req, res) => {
    const { content } = req.body;
    const answerComment = await AnswerComment.create({
      content,
      userId: req.user.id,
      answerId: req.params.answerId,
    });
    res.json({ answerComment });
  })
);

module.exports = router;
