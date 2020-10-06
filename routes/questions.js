const express = require('express');

const { asyncHandler } = require('../utils/utils');

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
  const questions = await Question.findAll();
  res.send(questions);
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const question = await Question.findOne({where: id});
  res.send(question);
}));

module.exports = router;