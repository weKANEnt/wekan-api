"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vdata", {
      ccid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      emid: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "users",
          key: "uid",
        },
      },
      email: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
      },
      hall:{
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      faculty:{
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      doesCommute: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      isPostGrad: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable("vdata");
  },
};
