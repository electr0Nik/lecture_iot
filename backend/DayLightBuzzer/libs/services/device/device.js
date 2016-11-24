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

app.get('/device/:state/:color/:interval/:maxLight', function (req, res) {
    var state = req.params.state;
    var color = req.params.color;
    var interval = req.params.interval;
    var maxLight = req.params.maxLight;

    console.log(state);
    console.log(color);
    console.log(interval);
    console.log(maxLight);

    var stateUrl;
    if(state == 1) {
        stateUrl = "&onoff=1";
    } else {
        stateUrl = "&onoff=0";
    }

    console.log(stateUrl);

    var colorUrl = "&color=" + color;

    var intervalUrl = "&time=" + interval;

    var maxLightUrl = "&ctemp=" + maxLight;

    var options = {
        url: lightifyUrl + '/device/set?idx=1' + stateUrl + colorUrl + intervalUrl + maxLightUrl,
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