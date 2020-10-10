const express = require("express");
const { check } = require("express-validator");

const { verifyUser } = require("../../utils/auth");
const {
  handleValidationErrors,
  asyncHandler,
  csrfProtection,
} = require("../../utils/utils");
const {
  User,
  Question,
  Answer,
  QuestionComment,
  AnswerComment,
} = require("../../db/models");

const router = express.Router({ mergeParams: true });

const validateContent = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Content can't be empty."),
  handleValidationErrors,
];

router.get("/", (req, res) => {
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
      const err = new Error("Answer validation error.")
      err.status = 400;
      return next(err);
    }
    const { content } = req.body;
    const answer = await Answer.create({
      content,
      userId: req.user.id,
      questionId: req.params.questionId,
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

    const answerCommentsData = answerComments.map((answerComment) => {
      return {
        content: answerComment.content,
        createdAt: answerComment.createdAt.toString(),
        user: answerComment.User.username,
      };
    });
    res.json(answerCommentsData);
  })
);

router.post(
  "/:answerId(\\d+)/comment",
  verifyUser,
  validateContent,
  asyncHandler(async (req, res) => {
    if (req.errors) {
      const err = new Error("Comment validation error.");
      err.status = 400;
      return next(err);
    }
    const { content } = req.body;
    const answerComment = await AnswerComment.create({
      content,
      userId: req.user.id,
      answerId: req.params.answerId,
    });
    res.json({ answerComment });
  })
);

router.post(
  "/:answerId(\\d)/vote",
  asyncHandler(async (req, res) => {
    const answerId = req.params.questionId;
    const { voteValue } = req.body;
    const currentState = await AnswerVote.findOne({
      where: {
        answerId: answerId,
        userId: req.user.id,
      },
    });
    if (!currentState) {
      await AnswerVote.create({
        userId: req.userId.id,
        value: voteValue,
        answerId: req.params.answerId,
      });
    } else if (currentState.value === voteValue) {
      currentState.value = 0;
      await currentState.save();
    } else {
      currentState.value = voteValue;
      await currentState.save();
    }
    const answer = await Answer.findOne({
      where: { id: answerId },
      attributes: {
        include: [
          [
            sequelize.literal(`(
                    SELECT COALESCE(SUM(av.value), 0)
                    FROM "AnswerVotes" AS av
                    WHERE
                    av."answerId" = "Answer".id
                )`),
            "score",
          ],
        ],
      },
    });

    res.json({
      currentVoteValue: answer.dataValues.score,
      currentStateValue: currentState.value,
    });
  })
);

module.exports = router;
