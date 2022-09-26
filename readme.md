sequelize model:generate --name UserData --attributes username:string,password:string,role:string
sequelize model:generate --name BioUser --attributes fullName:string,gender:string,age:integer,UserDataId:string
sequelize model:generate --name historyUser --attributes history:string,UserDataId:string

return queryInterface.addColumn(
      'BiodataUsers', // name of Source model
      'UserDataId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserData', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );

return queryInterface.removeColumn(
      'BiodataUsers', // name of Source model
      'UserDataId' // key we want to remove
    );
