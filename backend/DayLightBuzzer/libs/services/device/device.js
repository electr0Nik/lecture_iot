var express = require('express');
var bodyParser = require("body-parser");
var request = require('request');
var app = module.exports = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var lightifyUrl = 'https://eu.lightify-api.org/lightify/services';

app.get('/device', function (req, res) {

    var options = {
        url: lightifyUrl + '/devices/1',
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
    if (state == 'on') {
        stateUrl = "&onoff=1";
    } else {
        stateUrl = "&onoff=0";
    }

    var colorUrl = "&color=" + color;

    var intervalUrl = "&time=#" + interval;

    var maxLightUrl = "&ctemp=" + maxLight;

    var url = 'http://localhost:6001/auth'

    var token;
    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log('print return body: ' + body) // Print the json response
            console.log('print return body: ' + body.token) // Print the json response
            token = body.token;

            var options = {
                url: lightifyUrl + '/device/set?idx=1' + stateUrl + colorUrl + intervalUrl + maxLightUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            };

            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("Res: " + body);
                    console.log("Res as String:" + JSON.stringify(body));
                    res.write(JSON.stringify(body));
                    res.end();
                } else {
                    console.log(response.statusCode);
                    res.json('Status: FAIL');
                    res.end();
                }
            }

            request(options, callback);
        } else {
            return res.status(403).send({
                success: false,
                msg: 'Authenticaton failed. No security token.'
            });
        }
    })

});