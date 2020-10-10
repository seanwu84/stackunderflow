const express = require("express");
const { check } = require("express-validator");
const { verifyUser } = require("../../utils/auth");
const { handleValidationErrors, asyncHandler, csrfProtection } = require("../../utils/utils");
const { User, Question, Answer, QuestionComment, AnswerComment } = require("../../db/models");

const router = express.Router();

const validateComment = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Comment can't be empty."),
  handleValidationErrors,
];

const validateQuestion = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Title can't be empty.")
    .isLength({ max: 100 })
    .withMessage("Title must be 100 characters or less."),
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Question can't be empty."),
  handleValidationErrors,
]

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const questions = await Question.findAll();
//     res.json({ questions });
//   })
// );

router.post(
  "/",
  csrfProtection,
  validateQuestion,
  asyncHandler(async (req, res, next) => {
    if (!req.user) {
      res.redirect('./users/login');
    }
    if (req.errors) {
      console.log(req.errors);
      const err = new Error("Question validation error.")
      err.status = 400;
      return next(err);
    }
    const { title, content } = req.body;
    const question = await Question.create({ title, content, userId: req.user.id });
    res.status(201).json(`/questions/${question.id}`);
  })
);

// router.get(
//   "/:questionId(\\d+)",
//   asyncHandler(async (req, res) => {
//     const questions = await Question.findOne({
//       where: {
//         id: req.params.questionId,
//       },
//     });
//     res.json({ questions });
//   })
// );

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

// router.get(
//   "/:questionId(\\d+)/answers",
//   asyncHandler(async (req, res) => {
//     const answers = await Answer.findAll({
//       include: [
//         {
//           model: Question,
//           where: {
//             id: req.params.questionId,
//           },
//         },
//       ],
//     });

//     res.json({ answers });
//   })
// );

// router.get(
//   "/:questionId(\\d+)/answers/:answerId(\\d+)",
//   asyncHandler(async (req, res) => {
//     const answers = await Answer.findOne({
//       where: { id: req.params.answerId },
//       include: [
//         {
//           model: Question,
//           where: {
//             id: req.params.questionId,
//           },
//         },
//       ],
//     });

//     res.json({ answers });
//   })
// );

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
  verifyUser,
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
  "/:questionId(\\d+)/answers/:answerId(\\d+)/comment",
  verifyUser,
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
