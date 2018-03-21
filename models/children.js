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
  }


}

module.exports = registration;


