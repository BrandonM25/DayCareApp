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

    //  connection.query("INSERT INTO parents (username, password, first_name, last_name, spouse_id, email, street, city, state, zip, phone, emergency_name, emergency_phnum) values ('Anisha','test','test','test', 1, 'test','test','test','tt',3009, 770-122-3312, 'test','test')", function (err, result) {
    //   // if any error while executing above query, throw error
    //   if (err) throw err;
    //   // if there is no error, you have the result
    //   console.log(result);
    // });
  }


}

module.exports = orm;


 