"use strict";
module.exports = (sequelize, DataTypes) => {
  const AnswerComment = sequelize.define(
    "AnswerComment",
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
      answerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Answers" },
      },
    },
    {}
  );
  AnswerComment.associate = function (models) {
    AnswerComment.belongsTo(models.User, { foreignKey: "userId" });
    AnswerComment.belongsTo(models.Answer, { foreignKey: "answerId" });
  };
  return AnswerComment;
};
