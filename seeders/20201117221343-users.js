'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        firstName: 'Lauren',
        lastName: 'Nguyen',
        email: 'lauren@email.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Brock',
        lastName: 'Molmen',
        email: 'brock@brock.brock',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        firstName: 'Jamie',
        lastName: 'Cabrigas',
        email: 'jami@email.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], { returning: true })
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