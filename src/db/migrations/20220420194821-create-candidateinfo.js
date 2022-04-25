"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("candidateinfos", {
      cid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(255),
      },
      lastName: {
        type: Sequelize.STRING(255),
      },
      position: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      about: {
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("candidateinfos");
  },
};
