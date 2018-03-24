var express = require("express");

var router = express.Router();

var path = require("path");

var registration = require("../models/children.js");

// Import the model (cat.js) to use its database functions.


// Create all our routes and set up logic within those routes where required.
router.get("/parents", function(req, res) {

  res.sendFile(path.join(__dirname, "public/parents.html"));

});

router.get("/staff", function(req, res) {

    registration.staff(
     
        "Parents.first_name AS parent_first_name", 
        "Parents.last_name AS parent_last_name", 
        "children.first_name AS child_first_name", 
        "children.last_name AS child_last_name", 
        "children.birth_date AS child_bday",
        "Parents",
        "children",
 

      function(result) {
      // Send back the ID of the new quote
      // res.json(result);
      res.render('staff', {result: result});

    });

});


router.get("/landing", function(req, res) {

  res.sendFile(path.join(__dirname, "../public/landing.html"));

});

router.get("/register", function(req, res) {

  res.sendFile(path.join(__dirname, "../public/register.html"));

});
//router.get("/staff1", function(req, res) {
  //var obj = {first_name: "Brandon"}
  //res.render("staff", obj)

//});



// router.put("/api/cats/:id", function(req, res) {

// });

// router.delete("/api/cats/:id", function(req, res) {

// });

// Export routes for server.js to use.
module.exports = router;