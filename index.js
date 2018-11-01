let express = require('express');
let app = express();

let UserData = require("./db").UserData;
let PostData =  require('./db').PostData;

let getSequelize = require("./db").getSequelize;
let sequelize = getSequelize();

let md5 = require('md5');

app.use("/", express.static(__dirname +"/public"));
app.use('/jquery', express.static(__dirname+"./node_modules/jquery"));
app.use("/bootstrap",  express.static(__dirname + "/node_modules/bootstrap"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
