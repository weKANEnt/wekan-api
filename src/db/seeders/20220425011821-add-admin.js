"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash("weKAN", 10);
    await queryInterface.bulkInsert("admins", [
      {
        firstName: "Naomi",
        lastName: "Benjamin",
        email: "nobenjamin19@gmail.com",
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
