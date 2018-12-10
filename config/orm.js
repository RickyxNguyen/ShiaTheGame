var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  getScores:function(table,col) {
    var queryString = "SELECT * FROM ?? ORDER BY ?? DESC ";
    connection.query(queryString, [table,col], function(err, result) {
      if (err) throw err;
      console.log("==============================================");
      for (var i = 0; i < result.length; i++) {
        console.log(" Player:" + result[i].player_name);
        console.log(" Score:" + result[i].score_number);
        console.log(" Time:" + result[i].time_play);
        console.log("==============================================");
      }    
    });
  },
  addScores: function(table, val1 , val2, val3) {
    var queryString = "INSERT INTO ?? (player_name,score_number, time_play) VALUES (?,?,?) ";
    connection.query(queryString, [table,val1,val2, val3], function(err, result) {
      if (err) throw err;
    });
  }
  
};

module.exports = orm;
