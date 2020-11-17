'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'casey@test.com',
        name: 'casey',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jane@test.com',
        name: 'jane',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'lucy@test.com',
        name: 'lucy',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log("bulkInsert: ", bulkUsers)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
