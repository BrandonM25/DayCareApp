var express = require("express");

var router = express.Router();

var app = express();

var path = require("path");

var registration = require("../models/children.js");

router.post("/api/register", function(req, res) {


    registration.createParent(
      [
      "username", 
      "password", 
      "first_name", 
      "last_name", 
      "email", 
      "street", 
      "city", 
      "state", 
      "zip", 
      "phone", 
      "emergency_name", 
      "emergency_phnum"
      ], 

      [`'${req.body.username}',  
        '${req.body.password}', 
        '${req.body.first_name}', 
        '${req.body.last_name}', 
        '${req.body.email}', 
        '${req.body.street}',
        '${req.body.city}', 
        '${req.body.state}', 
        '${req.body.zip}', 
        '${req.body.phone}', 
        '${req.body.emergency_name}', 
        '${req.body.emergency_phnum}'`], 

      function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });

  

});

router.post("/api/child", function(req, res) {


    registration.createChild(
      [
        "first_name", 
        "last_name", 
        "birth_date", 
        "sex", 
        "parent1_id", 
        "allergies", 
        "allergy1", 
        "allergy2"
      ], 

      [`'${req.body.first_name}', 
        '${req.body.last_name}',
        '${req.body.birth_date}',
        '${req.body.sex}',
        '${req.body.parent1_id}',
        '${req.body.allergies}',
        '${req.body.allergy1}',
        '${req.body.allergy2}'`], 

      function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });

    });

    // registration.pushParent(
    //   [
    //     "username",
    //   ], 
    //   function(result) {

    //     // Send back the ID of the new quote
    //     res.json({ id: result.insertId });

    //   })



});


// Data
var children = [];

// Routes
router.get("/staff", function(req, res) {
    for (var i = 0; i < children.length; i++) {
        if (children[i].name === req.params.name) {
            return res.render("children", children[i]);
        }
    }
});

router.get("/api/parent", function(req, res) {

  registration.allParent(function(result) {

    res.json(result);
  });

});

router.get("/api/child", function(req, res) {
  registration.allChild(function(result) {

    res.json(result);
  });

});



console.log(registration);


// Export routes for server.js to use.
module.exports = router;

