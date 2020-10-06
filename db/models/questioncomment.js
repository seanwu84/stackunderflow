"use strict";
module.exports = (sequelize, DataTypes) => {
  const QuestionComment = sequelize.define(
    "QuestionComment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  QuestionComment.associate = function (models) {
    // associations can be defined here
  };
  return QuestionComment;
};
