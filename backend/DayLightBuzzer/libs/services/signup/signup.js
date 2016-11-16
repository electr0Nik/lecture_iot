var express = require('express');
var bodyParser = require("body-parser");
var app = module.exports = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log("signUp works");
    res.send("Login + SignUp");
    res.end();
});

//SignUp post function
app.post('/signUp', function (req, res) {
    /*Object.keys(req.body).forEach(function ( key, value ) {
     console.log("key:: " + key + " value:: " + req.params[key])
     });*/

    var EMAIL_USER_PW = req.body.EMAIL_USER_PW;

    console.log(EMAIL_USER_PW);
    //do some work in DB

    res.send({"status": "SUCCESS"});
});
