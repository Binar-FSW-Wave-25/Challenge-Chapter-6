'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistoryUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hasil: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.INTEGER
      },
      idDataUser: {
        type: Sequelize.INTEGER,
        References: {
          model: {
            tableName: "RegisterUser"
          },
          key:"id",
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    await queryInterface.dropTable('HistoryUsers');
  }
};