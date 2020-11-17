'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        first_name: 'Lauren',
        last_name: 'Nguyen',
        email: 'lauren@email.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Brock',
        last_name: 'Molmen',
        email: 'brock@brock.brock',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jamie',
        last_name: 'Cabrigas',
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
