"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash("weKAN", 10);
    await queryInterface.bulkInsert("admins", [
      {
        firstName: "Kayvia",
        lastName: "Harriott",
        email: "kayvia.harriott@mymona.uwi.edu",
        password: hash,
        OTP: "ABC123",
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
