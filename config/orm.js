// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

	create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

  },

    all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // push: function(table1,col,table2,t1,t2,cb){
  //   var queryString = "UPDATE" + table1 + "SET" + col + "FROM" + table2 + "WHERE" + t1 + "and" + t2 + ";"
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // }

  

}

module.exports = orm;


 