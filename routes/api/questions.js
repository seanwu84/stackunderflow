const express = require("express");
const { check } = require("express-validator");

const { verifyUser } = require("../../utils/auth");
const { handleValidationErrors, asyncHandler, csrfProtection } = require("../../utils/utils");
const { User, Question, QuestionComment, AnswerComment } = require("../../db/models");
const apiAnswersRouter = require("./answers");

const router = express.Router();

router.use('/:questionId(\\d+)/answers', apiAnswersRouter);

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

router.post(
  "/",
  verifyUser,
  csrfProtection,
  validateQuestion,
  asyncHandler(async (req, res, next) => {
    if (req.errors) {
      const err = new Error("Question validation error.")
      err.status = 400;
      return next(err);
    }
    const { title, content } = req.body;
    const question = await Question.create({ title, content, userId: req.user.id });
    res.status(201).json(`/questions/${question.id}`);
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

router.post('/:questionId(\\d+)/vote', asyncHandler(async (req, res) => {
  const questionId = req.params.questionId;
  const { voteValue } = req.body;
  const currentState = await QuestionVote.findOne({
    where: {
      questionId: questionId,
      userId: req.user.id
    }
  })

  if (!currentState) {
    await QuestionVote.create({
      userId: req.user.id,
      value: voteValue,
      questionId: req.params.questionId,
    });

  } else if (currentState.value === voteValue) {
    currentState.value = 0;
    await currentState.save()
  }
  else {
    currentState.value = voteValue;
    await currentState.save()
  }
  const question = await Question.findOne({
    where: { id: questionId },
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
  }
  );

  res.json({ currentVoteValue: question.dataValues.score, currentStateValue: currentState.value })
}));

module.exports = router;