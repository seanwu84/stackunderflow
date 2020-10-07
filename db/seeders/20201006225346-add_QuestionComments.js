'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('QuestionComments', [
        { userId: 1, questionId: 2, content: 'This is a dumb question!', createdAt: '2019-04-29', updatedAt: '2019-04-29' },
        { userId: 2, questionId: 3, content: 'Want to see my pub?', createdAt: '2019-04-29', updatedAt: '2019-04-29' },
        { userId: 3, questionId: 1, content: 'So sad!', createdAt: '2019-04-29', updatedAt: '2019-04-29' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('QuestionComments', null, {});
  }
};
