'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usergamebiodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATEONLY
      },
      adress: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      userGameId:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"UserGames"
          },
          key:'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usergamebiodata');
  }
};