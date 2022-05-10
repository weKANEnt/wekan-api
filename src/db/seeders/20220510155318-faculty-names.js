"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("faculties", [
      {
        facultyName: "Engineering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        facultyName: "Science & Technology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        facultyName: "Medical Sciences",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        facultyName: "Social Sciences",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        facultyName: "Humanities & Education",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        facultyName: "Institute for Gender and Development Studies",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        facultyName: "Sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        facultyName: "Law",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("faculties", null, {});
  },
};
