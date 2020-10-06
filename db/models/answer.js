"use strict";
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "Answer",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  Answer.associate = function (models) {
    Answer.hasMany(models.AnswerComment, { foreignKey: "answerId" });
    Answer.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Answer;
};
