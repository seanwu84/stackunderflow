'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AnswerVotes', [
      { userId: 1, value: 1, createdAt: '2019-04-29', updatedAt: '2019-04-29', answerId: 1 },
      { userId: 2, value: 0, createdAt: '2019-04-29', updatedAt: '2019-04-29', answerId: 3 },
      { userId: 3, value: -1, createdAt: '2019-04-29', updatedAt: '2019-04-29', answerId: 2 }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AnswerVotes', null, {});
  }
};
