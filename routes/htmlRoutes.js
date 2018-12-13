//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/lose', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/dead.html'));
  });
  app.get('/win', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/win.html'));
  });
};
