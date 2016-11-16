var express = require('express');
var bodyParser = require("body-parser");
var app = module.exports = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Test für GET
app.get('/', function (req, res, next) {
    console.log("Login works");
    next();
});

//Login post function
app.post('/login', function (req, res) {
    /*Object.keys(req.body).forEach(function ( key, value ) {
     console.log("key:: " + key + " value:: " + req.params[key])
     });*/

    var USER_PW = req.body.USER_PW;

    console.log(USER_PW);
    //do some work in DB

    res.send({"status": "SUCCESS"});
});