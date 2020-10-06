'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnswerVote = sequelize.define('AnswerVote', {
    answerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allow: false
    }
  }, 
  {
    indexes: [
      {
        unique: true,
        fields: ['userId', 'answerId']
      }
    ]
  });
  AnswerVote.associate = function(models) {
    // associations can be defined here
  };
  return AnswerVote;
};