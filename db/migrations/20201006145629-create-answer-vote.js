'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AnswerVotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      value: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      // {
      //   uniqueKeys: {
      //     unique_tag: {
      //       customIndex: true,
      //       fields: ['userId']
      //     }
      //   }
      // }
    );

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AnswerVotes');
  }
};