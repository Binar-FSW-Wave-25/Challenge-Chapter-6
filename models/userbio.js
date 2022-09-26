'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserBio.init({
    fullname: DataTypes.STRING,
    city: DataTypes.STRING,
    age: DataTypes.INTEGER,
    UserDataId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserBio',
  });
  return UserBio;
};