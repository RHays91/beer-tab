// Dependencies
var express = require('express');
var morgan = require('morgan');
var util = require('./server-utils.js');

// Initialize express process
var app = express();

// Bind middleware to app instance
app.use(morgan('dev'));
app.use(express.static(__dirname + './public'));
app.use(express.static('../app'));



app.get('/', util.checkUser, function (req, res) {
  res.sendfile('./public/index.html');
});

app.get('/signup', function (req, res) {

});

app.post('/signup', function (req, res) {

});

// Export server app instance
module.exports = app;