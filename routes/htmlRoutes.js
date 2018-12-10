//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/dead.html'));
  });

};
