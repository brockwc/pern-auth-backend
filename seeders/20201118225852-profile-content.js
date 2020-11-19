'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profiles', [{
      userId: "1",
      display_name: "John Doe",
      gender: "male",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId: "2",
      display_name: "Tim Smith",
      gender: "male",
      image: "https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId: "3",
      display_name: "John Doe",
      gender: "male",
      image: "https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId: "4",
      display_name: "John Doe",
      gender: "male",
      image: "https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
