"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },
    },

    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Question, { foreignKey: "userId" });
    User.hasMany(models.Answer, { foreignKey: "userId" });
    User.hasMany(models.QuestionComment, { foreignKey: "userId" });
    User.hasMany(models.AnswerComment, { foreignKey: "userId" });
    User.hasMany(models.QuestionVote, { foreignKey: 'userId'});
    User.hasMany(models.AnswerVote, { foreignKey: 'userId'});
  };
  return User;
};
