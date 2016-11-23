var express = require('express');
var bodyParser = require("body-parser");
var fs = require("fs");
var app = module.exports = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log("signUp works");
    res.send("Login + SignUp");
    res.end();
});

//SignUp post function
app.get('/signUpOld', function (req, res) {
    /*Object.keys(req.body).forEach(function ( key, value ) {
     console.log("key:: " + key + " value:: " + req.params[key])
     });*/

    //var EMAIL_USER_PW = req.body.EMAIL_USER_PW;

    //console.log(EMAIL_USER_PW);
    var file = fileExists("./libs/files/user.json");
    var user = userExists("./libs/files/user.json", 2, "nik@mail.com");

    console.log("File exists?:" + file);
    console.log(typeof (user));
    console.log("User exists JSON?:" + JSON.stringify(user));
    console.log("User exists?:" + user);

    if (Object.keys(user).length > 2) {
        console.log("User: " + user);
    } else {
        console.log("Empty user: " + user);
    }
    //do some work in DB

    var newUser = addUserToFile("./libs/files/user.json", 3, "Eugen", "Eugen@mail.com", "1357");
    console.log(newUser);
    res.send({"status": "SUCCESS"});
});

//Check if file exists
function fileExists(path) {
    return fs.existsSync(path);
}

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
    if (result === undefined || result === null) {
        result = JSON.stringify({});
    }

    return result;
}

//create file with this user

//Write new User to file
function addUserToFile(path, uid, name, email, password) {
    var findUser = userExists(path, uid, email);

    if (findUser === "{}") {
        var content = JSON.parse(fs.readFileSync(path).toString());
        content.push({uid: uid, name: name, email: email, password: password});
        var newContent = JSON.stringify(content);
        fs.writeFileSync(path, newContent);
        return true;
    }
    return false;
}

//return all Users in file
