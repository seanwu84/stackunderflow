'use strict';

const { foreign_key } = require("inflection");

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Question.associate = function(models) {
    Question.hasMany(models.QuestionVote, {foreignKey: 'questionId' })
  };
  return Question;
};