var express = require('express');
var bodyParser = require("body-parser");
var app = module.exports = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
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

    res.send({
        "status": "SUCCESS"
    });
});


/**
 * auth expects : x-www-urlencoded body 
 * with params: <i>name</i> and <i>password</i>
 * since we know that there are these parameter, we cann access them directly
 * return json with boolean success and token if successfull
 */
app.post('/authenticate', function (req, res) {
    /**
     * set header to allow CORS
     */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var _name = req.body.name
    var _password = req.body.password

    // hard coding for prototype
    // expecting user with name: nik and password:geheim
    if (_name !== 'nik' && _password !== 'geheim') {
        return res.status(403).send({
            success: false,
            msg: 'Authenticaton failed, user not found.'
        });
    } else {
        var token = '02ed6cc2-779e-4787-9a55-3c872875eaf4'
        res.json({
            success: true,
            token: token
        });
    }
});


/**
 * trigger lightify
 */
var triggerRoute = '/triggerLightify';
app.post(triggerRoute, function (req, res) {

    /**
     * set header to allow CORS
     */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    /**
     * lightify params
     */
    let color =  req.body.color;
    let intervall =  req.body.intervall;
    let maxLight =  req.body.maxLight;
    let maxOpacity =  req.body.maxOpacity;
    let deviceUuid =  req.body.deviceUuid;
    console.log('c: ' + color + ' i : ' + intervall + ' : ' + 'm:' + maxLight + ' : d: ' + deviceUuid);

    if (deviceUuid !== 'niks_device') {
        return res.status(403).send({
            success: false,
            msg: 'Authenticaton failed, device not registered.'
        });
    } else {
        var token = '02ed6cc2-779e-4787-9a55-3c872875eaf4'
        res.json({
            success: true,
            token: token
        });
    }
});