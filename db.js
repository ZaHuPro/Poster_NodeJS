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

const PostData = sequelize.define('Post',{
    username: Sequelize.STRING,
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    tag: Sequelize.STRING,
});

module.exports.UserData = UserData;
module.exports.PostData = PostData;
sequelize.sync();