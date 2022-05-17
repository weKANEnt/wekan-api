"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class electiondata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electiondata.init(
    {
      elid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      electionName: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      csvLocation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "electiondata",
    }
  );
  return electiondata;
};
