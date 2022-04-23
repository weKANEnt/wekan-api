'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tallyinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({candidateinfos}) {
      // define association here
      //this.belongsTo(candidateinfos, {foreignKey: "cid"})//may be ttid
    }
  }
  tallyinfo.init({
    tid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    noOfVotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tallyinfo',
  });
  return tallyinfo;
};