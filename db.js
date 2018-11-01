const Sequelize  =  require('sequelize');
const sequelize =  new Sequelize ('poster', 'root' , '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports.getSequelize = function(){
    return sequelize;
};

const UserData = sequelize.define('User',{
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    phone: Sequelize.INTEGER,
    password: Sequelize.STRING
});

const PostDate = sequelize.define('post',{
    username: Sequelize.STRING,
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    tag: Sequelize.STRING,
});