'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionVote = sequelize.define('QuestionVote', {
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, 
  {
    indexes: [
      {
        unique: true,
        fields: ['userId', 'questionId']
      }
    ]
  });
  QuestionVote.associate = function(models) {
    QuestionVote.belongsTo(models.User, { foreignKey: 'userId' })
    QuestionVote.belongsTo(models.Question, { foreignKey: 'questionId' });
  };
  return QuestionVote;
};