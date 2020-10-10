const express = require('express');
const { check } = require("express-validator");

const { verifyUser } = require("../../utils/auth");
const { handleValidationErrors, asyncHandler, csrfProtection } = require("../../utils/utils");
const { User, Question, Answer, QuestionComment, AnswerComment } = require("../../db/models");

const router = express.Router({ mergeParams: true });

const validateContent = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Content can't be empty."),
  handleValidationErrors,
];

router.get('/', (req, res) => {
  const id = req.params.questionId;
  console.log(`Here in answers: ${id}`);
  res.send(`Here in answers: ${id}`);
});

router.post(
  "/",
  verifyUser,
  csrfProtection,
  validateContent,
  asyncHandler(async (req, res, next) => {
    if (req.errors) {
      // console.log(req.errors);
      const err = new Error("Answer validation error.")
      err.status = 400;
      return next(err);
    }
    const { content } = req.body;
    const answer = await Answer.create({ 
      content,
      userId: req.user.id,
      questionId: req.params.questionId
    });
    res.status(201).json({ answer });
  })
);

router.get(
  "/:answerId(\\d+)/comments",
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
  "/:answerId(\\d+)/comment",
  verifyUser,
  validateContent,
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