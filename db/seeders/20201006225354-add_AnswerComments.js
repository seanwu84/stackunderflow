'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('AnswerComments', [
        { content: 'This is a cool answer!', createdAt: '2019-04-29', updatedAt: '2019-04-29', userId: '1', answerId: '3'},
        { content: 'I am not sure about that answer!', createdAt: '2019-04-29', updatedAt: '2019-04-29', userId: '2', answerId: '1' },
        { content: 'Love the answer!', createdAt: '2019-04-29', updatedAt: '2019-04-29', userId: '3', answerId: '2' },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('AnswerComments', null, {});
  }
};
