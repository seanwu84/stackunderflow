'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('QuestionVotes', [
        { userId: 1, value: 1, createdAt: '2019-04-29', updatedAt: '2019-04-29', questionId: 1  },
        { userId: 2, value: 0, createdAt: '2019-04-29', updatedAt: '2019-04-29', questionId: 3 },
        { userId: 3, value: -1, createdAt: '2019-04-29', updatedAt: '2019-04-29', questionId: 2 }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('QuestionVotes', null, {});
  }
};
