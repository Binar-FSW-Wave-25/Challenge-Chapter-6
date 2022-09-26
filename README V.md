# CH6 Challenge

3 Table in the Challenge DB

1. user_data
    a. username
    b. email
    c. password
    d. role

    sequelize model:generate --name UserData --attributes username:string,email:string,password:string,role:string

2. user_bio
    a. FullName
    b. City
    c. Age
    d. UserDataId

    sequelize model:generate --name UserBio --attributes fullname:string,city:string,age:integer,UserDataId:integer

3. user_history
    a. winsStatus
    b. score
    c. last_login
    d. UserDataId

    sequelize model:generate --name UserHistory --attributes winStatus:string,score:integer,last_login:date,UserDataId:integer
