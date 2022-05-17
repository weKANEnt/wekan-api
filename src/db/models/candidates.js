"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class candidates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  candidates.init(
    {
      cid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      hall: DataTypes.STRING,
      faculty: DataTypes.STRING,
      position: DataTypes.STRING,
      about: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "candidates",
    }
  );
  return candidates;
};
