let express = require('express');
let app = express();

let UserData = require("./db").UserData;
let PostData =  require('./db').PostData;

let getSequelize = require("./db").getSequelize;
let sequelize = getSequelize();

let md5 = require('md5');
let bodyParser = require('body-parser');

app.use("/", express.static(__dirname +"/public"));
app.use('/jquery', express.static(__dirname+"./node_modules/jquery"));
app.use("/bootstrap",  express.static(__dirname + "/node_modules/bootstrap"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/userList', function(req, res){
    sequelize.sync()
        .then(function(){
            return UserData.findAll()
        })
        .then (function(list){
            res.json(list);
        });
})


app.post('/userCheck', function(req, res){
    sequelize.sync()
        .then(function(){
            return UserData.findOne({
                where: {
                    username : req.body.username,
                    password : req.body.password
                }
            })
        })
        .then(function(data){
            res.json(data);
        });
});

app.post('/userData', function(req, res){
    sequelize.sync()
        .then(function(){
            return UserData.findOne({
                where: {
                    username : req.body.username,
                }
            })
        })
        .then(function(data){
            res.json(data);
        });
});


app.post('/userAdd', function(req, res){
    sequelize.sync()
        .then(function(){
            return UserData.create({
                    username : req.body.username,
                    password : req.body.password,
                    email: req.body.email,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    phone: req.body.phone
            })
        })
        .then(function(data){
            res.json(data);
        });
});


app.put('/userUpdate', function(req, res){
    sequelize.sync()
        .then(function(){
            return UserData.update({
                password : req.body.password,
                email: req.body.email,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                phone: req.body.phone
            },{
                where: {
                    username : req.body.username,
                    password : req.body.password
                }
            })
        })
        .then(function(data){
            res.json(data);
        });
});

app.delete('/userDelect', function (req, res) {
    sequelize.sync()
        .then(function () {
            return UserData.destroy({
                where: {
                    username : req.body.username,
                }
            })
        })
        .then (function (data) {
            if (user == null) {
                res.status(404).send('User not found');
            } else {
                res.json(data);
            }      
        })
})


app.post('/postAdd', function(req, res){
    sequelize.sync()
        .then(function(){
            return PostData.create({
                    username: req.body.username,
                    title: req.body.title,
                    content: req.body.content,
                    tag: req.body.tag
            })
        })
        .then(function(data){
            res.json(data);
        });
});

app.get('/postList', function(req, res){
    sequelize.sync()
        .then(function(){
            return PostData.findAll()
        })
        .then (function(list){
            res.json(list);
        });
})


app.listen(1100, function(){
    console.log("Server Stated")
});