var mysql = require("mysql");
const express = require('express');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Weary234",
  database: "scores_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
//ROUTER
require('../routes/htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, function () {
});

module.exports = connection;
