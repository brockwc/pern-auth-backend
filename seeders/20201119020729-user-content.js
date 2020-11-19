'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: "john@here.com",
      name: "John Doe",
      password: "enter",
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "mary@here.com",
      name: "Mary Smith",
      password: "enter",
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "adam@here.com",
      name: "Adam Johnson",
      password: "enter",
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "sandy@here.com",
      name: "Sandy Cheeks",
      password: "enter",
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
