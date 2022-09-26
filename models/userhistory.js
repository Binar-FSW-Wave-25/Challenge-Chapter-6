'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserHistory.init({
    winStatus: DataTypes.STRING,
    score: DataTypes.INTEGER,
    last_login: DataTypes.DATE,
    UserDataId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserHistory',
  });
  return UserHistory;
};