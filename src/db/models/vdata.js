'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(users) {
      // define association here
      this.belongsTo(users, {foreignKey: "uid"})//may be emid
    }
  }
  vdata.init({
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vdata',
  });
  return vdata;
};