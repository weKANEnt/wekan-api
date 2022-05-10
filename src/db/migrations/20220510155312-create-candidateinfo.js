"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("candidateinfo", {
      cid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vdid: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "vdata",
          key: "ccid",
        },
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
    await queryInterface.dropTable("candidateinfo");
  },
};
