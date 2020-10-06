'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionVote = sequelize.define('QuestionVote', {
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  QuestionVote.associate = function(models) {
    // associations can be defined here
  };
  return QuestionVote;
};