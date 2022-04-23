'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class candidateinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  candidateinfo.init({
    cid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    about: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'candidateinfo',
  });
  return candidateinfo;
};