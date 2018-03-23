var express = require("express");

var router = express.Router();

var path = require("path");

// Import the model (cat.js) to use its database functions.


// Create all our routes and set up logic within those routes where required.
router.get("/parents", function(req, res) {

  res.sendFile(path.join(__dirname, "public/parents.html"));

});

router.get("/staff", function(req, res) {
var obj = {
  first_name: "Brandon",
  last_name: "Matthews",
  birth_date: "12/25/82",
  sex: "m",
  parent1_id: "Orlean Matthews"
};
  //res.sendFile(path.join(__dirname, "public/staff.html"));
res.render("staff", obj);

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