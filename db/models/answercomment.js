"use strict";
module.exports = (sequelize, DataTypes) => {
  const AnswerComment = sequelize.define(
    "AnswerComment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  AnswerComment.associate = function (models) {
    // associations can be defined here
  };
  return AnswerComment;
};
