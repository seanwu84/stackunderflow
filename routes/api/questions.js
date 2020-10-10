const express = require("express");
const { check } = require("express-validator");

const { verifyUser } = require("../../utils/auth");
const { handleValidationErrors, asyncHandler, csrfProtection } = require("../../utils/utils");
const { User, Question, QuestionComment, AnswerComment } = require("../../db/models");
const apiAnswersRouter = require("./answers");

const router = express.Router();
const db = require("../../db/models");
const { User, Question, Answer, QuestionComment, AnswerComment, AnswerVote, QuestionVote, sequelize } = db;

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

router.get(
  "/:questionId(\\d+)/votestotal",
  asyncHandler(async(req, res) => {
    const questionId = req.params.questionId;
    const question = await Question.findOne({
      where: {id:questionId },
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
    res.json({ score: question.get().score })
  })
)


router.get(
  "/:questionId(\\d+)/answers/:answerId(\\d)/votestotal",
  asyncHandler(async (req, res) => {
    const answerId = req.params.answerId;
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
            'score'
          ],
        ]
      },
    }
    );
    res.json({ score: answer.get().score })
  })
)


router.post('/:questionId(\\d+)/vote', asyncHandler(async (req, res) => {
  const questionId = req.params.questionId;
  //get the number for that question
  const currentState = await QuestionVote.findOne({
    where: { id: questionId,
             userId: req.user.id }
  })
  if (currentState.value < 1) {
    
  } 

  //if < 1, increment, save back to vote
  //if no entry, make entry
  
  const questionVote = await QuestionVote.create({
    userId: req.user.id,
    value: 1,
    questionId: req.params.questionId,
  });
  res.json({ questionVote })
}));

//delete rougte same pattern above
//if > -1, subtract
// if no entry, make entry


router.post('/:questionId(\\d+)/answers/:answerId(\\d)/vote', asyncHandler(async (req, res) => {
  const answerVote = await AnswerVote.create({
    userId: req.user.id,
    answerId: req.params.answerId,
    value: 1
  });
  res.json({ answerVote })
}));



router.delete('/:questionId(\\d+)/votes', asyncHandler(async (req, res) => {

  // const questionVote = await QuestionVote.create({
  //   userId: req.user.id,
  //   questionId: req.params.questionId,
  //   value: 0
  // });
  // res.json({ questionVote })
}));

module.exports = router;
