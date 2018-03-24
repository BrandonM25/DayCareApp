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

  staffData: function(col1,col2,col3,col4,col5,t1,t2,cb){
    var queryString = "SELECT " + col1 + "," + col2 + "," + col3 + "," + col4 + "," + col5 + " FROM " + t1 +
      " RIGHT OUTER JOIN " + t2 + " ON " + t1 + ".id = " + t2 + ".parent1_id";

      // cb(queryString);return;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

     // t1 = daycare_db.Parents
     // t2 =daycare_db.children 
    // daycare_db.Parents.first_name, daycare_db.Parents.last_name, daycare_db.children.first_name, daycare_db.children.last_name, daycare_db.children.birth_date

  }

}

module.exports = orm;


 