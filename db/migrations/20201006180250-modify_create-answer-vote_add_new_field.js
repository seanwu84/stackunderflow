'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn(
        'AnswerVotes',
        'answerId',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Answers',
            key: 'id'
          }
        },
        { transaction: t }
      );

      await queryInterface.addConstraint(
        'AnswerVotes',
        ['userId', 'answerId'],
        {
          type: 'unique',
          customIndex: true
        },
        { transaction: t }
      );
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeConstraint('AnswerVotes', 'AnswerVotes_userId_answerId_uk', { transaction: t });
      await queryInterface.removeColumn('AnswerVotes', 'answerId', { transaction: t });
    });
  },
};
