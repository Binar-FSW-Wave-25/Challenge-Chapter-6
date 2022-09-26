'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BiodataUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BiodataUser.belongsTo(models.RegisterUser)
    }
  }
  BiodataUser.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    city: DataTypes.STRING,
    idDataUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BiodataUser',
  });
  return BiodataUser;
};