var express = require('express');
var bodyParser = require("body-parser");
var app = module.exports = express();
var request = require('request');
var baseURL = 'https://eu.lightify-api.org/lightify/services';
var groupURL = '/groups';
var groupSetURL = "/groups/set";

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//GET for retrieving all groups
app.get(groupURL, function (req, res) {
    var options = {
        url: baseURL + groupURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '163782-fanyXYgCpAVQD6Soamtm'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);
            res.json(body);
            res.end();
        } else {
            res.json('Status: FAIL');
            res.end();
        }
    }

    request(options, callback);
});

app.get(groupSetURL + '/:groupNumber', function (req, res) {
    var groupNumber = req.params.groupNumber;
    console.log(groupNumber + " it works");

    var options = {
        url: baseURL + '/group/set?idx=' + groupNumber + '&onoff=0',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '163782-fanyXYgCpAVQD6Soamtm'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);
            res.json(body);
            res.end();
        } else {
            console.log(error);
            res.json('Status: FAIL');
            res.end();
        }
    }

    request(options, callback);
});
