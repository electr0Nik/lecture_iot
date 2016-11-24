var express = require('express');
var bodyParser = require("body-parser");
var request = require('request');
var app = module.exports = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var lightifyUrl = 'https://eu.lightify-api.org/lightify/services';

app.get('/device', function(req, res) {
    var options = {
        url: lightifyUrl + '/devices',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '163782-ZZsatexJ7QSlqtcdXa4q'
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