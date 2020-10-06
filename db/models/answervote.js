'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnswerVote = sequelize.define('AnswerVote', {
    answerId: {
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
      allow: false
    }
  }, {});
  AnswerVote.associate = function(models) {
    // associations can be defined here
  };
  return AnswerVote;
};