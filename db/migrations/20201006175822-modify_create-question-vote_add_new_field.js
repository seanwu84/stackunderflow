'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
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
        }, 
        { transaction: t }
      );

      await queryInterface.addConstraint(
        'QuestionVotes',
        ['userId', 'questionId'],
        {
          type: 'unique',
          customIndex: true
        },
        { transaction: t }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeConstraint('QuestionVotes', 'QuestionVotes_userId_questionId_uk', { transaction: t });
      await queryInterface.removeColumn('QuestionVotes', 'questionId', { transaction: t });
    });
  },
};


