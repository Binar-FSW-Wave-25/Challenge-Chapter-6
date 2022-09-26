'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodataUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  biodataUser.init({
    fullname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phone: DataTypes.STRING,
  },
   {
    sequelize,
    modelName: 'biodataUser',
  });
  return biodataUser;
};