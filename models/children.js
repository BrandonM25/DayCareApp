var orm = require("../config/orm.js");


var registration = {
   createParent: function(cols, vals, cb) {
    orm.create("Parents", cols, vals, function(res) {
      cb(res);
    });
  },

 createChild: function(cols, vals, cb) {
    orm.create("children", cols, vals, function(res) {
      cb(res);
    });
  },
  
  allParent: function(cb) {
    orm.all("Parents", function(res) {
      cb(res);
    });
  },

   allChild: function(cb) {
    orm.all("children", function(res) {
      cb(res);
    });
  },

  // pushParent: function(colname,cb){
  // 	 orm.push(colname, "Parents", function(res) {
  //     cb(res);
  //   });

  // 	 console.log(orm.push());


  // }

   // var queryString = "INSERT INTO" + table1 + "VALUES" + col + "SELECT" + colname + "FROM" + table2 + ";"

    // var queryString = "INSERT INTO" + children + "VALUES" + parent1_id + "SELECT" + id + "FROM" + Parents + ";"

}

module.exports = registration;


