"use strict";
module.exports = (sequelize, DataTypes) => {
  const QuestionComment = sequelize.define(
    "QuestionComment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      questionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Questions" },
      },
    },
    {}
  );
  QuestionComment.associate = function (models) {
    QuestionComment.belongsTo(models.User, { foreignKey: "userId" });
    QuestionComment.belongsTo(models.Question, { foreignKey: "questionId" });
  };
  return QuestionComment;
};
