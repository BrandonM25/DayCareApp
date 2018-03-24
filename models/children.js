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

   staff: function(col1,col2,col3,col4,col5,t1,t2,cb) {
    orm.staffData(col1,col2,col3,col4,col5,t1,t2, function(res) {
      cb(res);
    });
  },



}

module.exports = registration;


