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

//   staffData: function(,cb){
//     var queryString = "SELECT " + daycare_db.Parents.first_name, daycare_db.Parents.last_name, daycare_db.children.first_name, daycare_db.children.last_name, daycare_db.children.birth_date
// FROM daycare_db.Parents
// INNER JOIN daycare_db.children 

//   }

}

module.exports = orm;


 