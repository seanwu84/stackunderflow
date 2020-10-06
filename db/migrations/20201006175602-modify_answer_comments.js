"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn("AnswerComments", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      }, { transaction: t });

      await queryInterface.addColumn("AnswerComments", "answerId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Answers" },
      }, { transaction: t });
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      queryInterface.removeColumn("AnswerComments", "userId", { transaction: t });
      queryInterface.removeColumn("AnswerComments", "answerId", { transaction: t });
    });
  },
};
