var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");
var fs = require("fs");
var app = module.exports = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var pathUser = './libs/files/user.json';

app.get('/auth', function (req, res) {
//function getAuthorizationCode(uid, email) {

    //get uid, get email through parameters
    var uid = 2;
    var email = "greece_awraam@web.de";

    var findUser = userExists(pathUser, uid, email);
    console.log("User found: " + findUser);

    var name = findUser.name;
    var password = findUser.password;
    console.log("Name: " + name + " Type: " + typeof name);
    console.log("Password: " + password);

    var options = {
        'body': {
            'username':'name',
            'password':'passwort',
            'serialNumber':'OSR017B305B'
        }
    };

    function callback(error, response, body) {
        console.log("Error: " + error);
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);
            res.json(body);
        }
        res.json('Status: FAIL');
        res.end();
    }

    request('https://eu.lightify-api.org/lightify/services/session', options, callback);
});

//Check if user exists
function userExists(path, uid, email) {
    var content = JSON.parse(fs.readFileSync(path).toString());
    var result;
    for (var i in content) {
        if ((content[i].uid == uid) && (content[i].email == email)) {
            result = content[i];
            break;
        }
    }
    if(result === undefined || result === null) {
        result = JSON.stringify({});
    }

    return result;
}