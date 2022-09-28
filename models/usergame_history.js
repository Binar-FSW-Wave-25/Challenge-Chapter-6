'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userGame_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userGame_History.init({
    user: DataTypes.STRING,
    com: DataTypes.STRING,
    result: DataTypes.STRING,
    userGameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userGame_History',
  });
  return userGame_History;
};