'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
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
      ),

      queryInterface.addConstraint(
        'AnswerVotes',
        ['userId', 'answerId'],
        {
          type: 'unique',
          customIndex: true
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('AnswerVotes', 'answerId'),
    ]);
  },
};
