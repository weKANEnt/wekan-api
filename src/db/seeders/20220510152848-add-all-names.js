"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("halls", [
      {
        hallName: "A.Z Preston",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Chancellor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Irvine",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Mary Seacole",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Taylor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Rex Nettleford",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "ABC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Elsa Leo Rhynie",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Marlene Hamilton",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "Leslie Robinson",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "George Alleyne",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hallName: "WJC",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("halls", null, {});
  },
};
