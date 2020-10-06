'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnswerVote = sequelize.define('AnswerVote', {
    answerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {});
  AnswerVote.associate = function(models) {
    // associations can be defined here
  };
  return AnswerVote;
};