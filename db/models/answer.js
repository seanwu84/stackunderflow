'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};