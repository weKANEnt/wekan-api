"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(users) {
      // define association here
      //this.belongsTo(users, {foreignKey: "uid"})//may be emid
    }
  }
  vdata.init(
    {
      ccid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      emid: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "users",
          key: "uid",
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hall: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      faculty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doesCommute: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "vdata",
    }
  );
  return vdata;
};
