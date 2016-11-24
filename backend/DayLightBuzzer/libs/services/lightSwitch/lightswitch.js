var express = require('express');
var app = module.exports = express();

app.get('/on', function (req, res) {

    //get authorization code
    //get user
    var options = {
        url: "https://eu.lightify-api.org/lightify/services/session",
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            username: "",
            password: "",
            serialNumber: "OSR017B305B"
        }
    };

});