'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'QuestionVotes',
      'questionId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Questions',
          key: 'id'
        }
      }
    );

    await queryInterface.addConstraint(
      'QuestionVotes',
      {
        fields: ['userId', 'questionId'],
        type: 'unique',
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('QuestionVotes', 'QuestionVotes_userId_questionId_uk');
    await queryInterface.removeColumn('QuestionVotes', 'questionId');
  },
};


