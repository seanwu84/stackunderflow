'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      }
    );

    await queryInterface.addConstraint(
      'AnswerVotes',
      ['userId', 'answerId'],
      {
        type: 'unique',
        customIndex: true
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('AnswerVotes', 'AnswerVotes_userId_answerId_uk');
    await queryInterface.removeColumn('AnswerVotes', 'answerId');
  },
};
