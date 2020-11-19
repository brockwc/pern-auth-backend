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
      email: "john@here.com",
      name: "John Doe",
      password: "enter",
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      email: "john@here.com",
      name: "John Doe",
      password: "enter",
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "john@here.com",
      name: "John Doe",
      password: "enter",
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
