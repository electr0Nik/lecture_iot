/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

//define modules with services
var login = require('./libs/services/login/login');
var signUp = require('./libs/services/signup/signUp');
var group = require('./libs/services/group/group');
var authorization = require('./libs/services/authorization/authorization');

// use the defined modules
app.use(login);
app.use(signUp);
app.use(group);
app.use(authorization);

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});

app.get('/hello', function (req, res) {
    console.log("It works!");
    res.send("Hello World!");
});
