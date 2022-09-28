'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usergame_bio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usergame_bio.init({
    fullname: DataTypes.STRING,
    adress: DataTypes.STRING,
    age: DataTypes.INTEGER,
    birthdate: DataTypes.DATEONLY,
    userGameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usergame_bio',
  });
  return usergame_bio;
};