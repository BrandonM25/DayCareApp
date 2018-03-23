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

//   push: function(colname,table2,cb){
//     var queryString = "INSERT INTO " + children + "(" + parent1_id + ")";

    
//     // queryString += cols;
//     // queryString += ".";
//     queryString += " SELECT ";
//     queryString += colname;
//     queryString += " FROM ";
//     queryString += table2;
//     // queryString += " WHERE ";
//     // queryString += val;

// //         var queryString = INSERT INTO children (parent1_id)
// // SELECT id FROM Parents;

//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   }

  

}

module.exports = orm;


 