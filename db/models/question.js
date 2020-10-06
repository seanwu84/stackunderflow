"use strict";
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {}
  );
  Question.associate = function (models) {
    Question.belongsTo(models.User, { foreignKey: "userId" });
    Question.hasMany(models.QuestionComment, { foreignKey: "questionId" });
  };
  return Question;
};
