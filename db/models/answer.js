'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Answer.associate = function(models) {
    Answer.hasMany(models.AnswerVote, { foreignKey: 'answerId'});
    Answer.belongsTo(model.User, { foreignKey: 'userId'})
  };
  return Answer;
};