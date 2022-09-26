'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userGameBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userGameBiodata.init({
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    UserName: DataTypes.INTEGER,
    Country: DataTypes.STRING,
    UserDataId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userGameBiodata',
  });
  return userGameBiodata;
};