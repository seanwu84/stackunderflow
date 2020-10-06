'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
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
      ),

      queryInterface.addConstraint(
        'QuestionVotes',
        ['userId', 'questionId'],
        {
          type: 'unique',
          customIndex: true
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('QuestionVotes', 'questionId'),
    ]);
  },
};


 