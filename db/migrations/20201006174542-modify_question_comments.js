"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn("QuestionComments", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      }, { transaction: t });

      await queryInterface.addColumn("QuestionComments", "questionId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Questions" },
      }, { transaction: t });
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn("QuestionComments", "userId", { transaction: t });
      await queryInterface.removeColumn("QuestionComments", "questionId", { transaction: t });
    });
  },
};
