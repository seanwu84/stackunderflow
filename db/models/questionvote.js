'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionVote = sequelize.define('QuestionVote', {
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {});
  QuestionVote.associate = function(models) {
    // associations can be defined here
  };
  return QuestionVote;
};