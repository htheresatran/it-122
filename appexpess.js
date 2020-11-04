//add modules to the app
var express = require('express');
var path= require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('view', path.join(__direname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(rew, res){
    //console.log("Here");
    res.send('<h1>hello world</h1>');
    res.render('index')
});
app.listen(3000);
console.log('server is running on port 3000');
