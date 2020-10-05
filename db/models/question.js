'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};