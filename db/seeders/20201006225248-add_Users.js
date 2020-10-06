'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        { username: 'Harrison Ford', email: 'harrison@ford.com', hashedPassword: '$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe', createdAt: new Date(), updatedAt: new Date()},
        { username: 'Henry Higgins', email: 'henry@higgins.com', hashedPassword: '$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe', createdAt: new Date(), updatedAt: new Date()},
        { username: 'Jessica Alba', email: 'jessica@alba.com', hashedPassword: '	$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe', createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
