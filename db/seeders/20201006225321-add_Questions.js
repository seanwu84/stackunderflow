'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Questions', [
        { title: 'Who is John Doe?', content: 'Why is the name used for unknow people?', userId: 1, createdAt: '2019-04-09', updatedAt: '2019-04-09'},
        { title: 'Why is the sky blue?', content: 'What is the reason the sky is blue?', userId: 2, createdAt: '2019-04-16', updatedAt: '2019-04-16'},
        { title: 'Why are dogs so cute?', content: 'I just want to melt when I see a dog, why are they soooo cute?!', userId: 3, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Questions', null, {});
  }
};
