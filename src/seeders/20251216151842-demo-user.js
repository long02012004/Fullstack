"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "John Doe",
          password: 123456,
          username: "johndoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Jane Smith",
          password: 123456,
          username: "janesmith",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
