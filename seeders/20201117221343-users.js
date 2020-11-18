'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        first_name: 'Lauren',
        last_name: 'Nguyen',
        email: 'lauren@email.com',
<<<<<<< HEAD:seeders/20201117192826-soulsipn-users.js
        password: 'password', 
=======
        password: 'password',
>>>>>>> submain:seeders/20201117221343-users.js
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Brock',
        last_name: 'Molmen',
        email: 'brock@brock.brock',
<<<<<<< HEAD:seeders/20201117192826-soulsipn-users.js
        password: 'password', 
=======
        password: 'password',
>>>>>>> submain:seeders/20201117221343-users.js
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
<<<<<<< HEAD:seeders/20201117192826-soulsipn-users.js
        firstName: 'Jamie',
        lastName: 'Cabrigas',
        email: 'jami@email.com',
        password: 'password', 
=======
        first_name: 'Jamie',
        last_name: 'Cabrigas',
        email: 'jami@email.com',
        password: 'password',
>>>>>>> submain:seeders/20201117221343-users.js
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
