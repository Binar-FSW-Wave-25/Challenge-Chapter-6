'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoryUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HistoryUser.belongsTo(models.RegisterUser)
    }
  }
  HistoryUser.init({
    hasil: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
    idDataUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HistoryUser',
  });
  return HistoryUser;
};