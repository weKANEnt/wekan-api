"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class positions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  positions.init(
    {
      pid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      positionTitle: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "positions",
    }
  );
  return positions;
};
