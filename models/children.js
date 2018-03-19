var orm = require("../config/orm.js");


var registration = {
   create: function(cols, vals, cb) {
    orm.create("Parents", cols, vals, function(res) {
      cb(res);
    });
  }
}

module.exports = registration;


