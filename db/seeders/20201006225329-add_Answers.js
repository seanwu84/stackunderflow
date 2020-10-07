'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Answers', [
        { content: 'A man was unknown found on the roadside marked the grave John Doe.', createdAt: '2019-04-29', updatedAt: '2019-04-29', userId: 3, questionId: 1,  },
        { content: 'The oxygen reflects the blue spectrum, makeing the sky blue.', createdAt: '2019-04-29', updatedAt: '2019-04-29', userId: 3, questionId: 2, },
        { content: 'They simply are adorable its unexplainable!', createdAt: '2019-04-29', updatedAt: '2019-04-29', userId: 1, questionId: 3 }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Answers', null, {});

  }
};
