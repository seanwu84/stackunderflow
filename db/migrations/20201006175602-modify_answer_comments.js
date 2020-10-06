"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn("AnswerComments", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      }),
      queryInterface.addColumn("AnswerComments", "answerId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Answers" },
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn("AnswerComments", "userId"),
      queryInterface.removeColumn("AnswerComments", "answerId"),
    ]);
  },
};
