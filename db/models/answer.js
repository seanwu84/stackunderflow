"use strict";
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" },
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Questions" },
    },
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, { foreignKey: "userId" });
    Answer.belongsTo(models.Quesion, { foreignKey: "questionId" });
    Answer.hasMany(models.AnswerComment, { foreignKey: "answerId" });
    Answer.hasMany(models.AnswerVote, { foreignKey: 'answerId'});
  };
  return Answer;
};
