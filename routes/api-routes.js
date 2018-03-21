var express = require("express");

var router = express.Router();

var app = express();

var path = require("path");

var registration = require("../models/children.js");

router.post("/api/register", function(req, res) {


    registration.createParent([
      "username", "password", "first_name", "last_name", "email", "street", "city", "state", "zip", "phone", "emergency_name", "emergency_phnum"
      ], 

      ["'" + req.body.username + "'", "'" + req.body.password + "'",

      // _________________________________________________________ 

       "'" + req.body.first_name + "'", "'" + req.body.last_name + "'",

       // _________________________________________________________  

        "'" + req.body.email+ "'", 

       // _________________________________________________________ 

       "'" + req.body.street+ "'", "'" + req.body.city+ "'", 

       // _________________________________________________________ 

       "'" + req.body.state+ "'", req.body.zip, 

       // _________________________________________________________ 
       
       "'" + req.body.phone+ "'", "'" + req.body.emergency_name+ "'",

       // _________________________________________________________  
       
       "'" + req.body.emergency_phnum+ "'"
      ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });

  console.log(req.body);

});

router.post("/api/child", function(req, res) {


    registration.createChild([
      "first_name", "last_name", "birth_date", "sex", "allergies", "allergy1", "allergy2"
      ], 

      [

      // _________________________________________________________ 

       "'" + req.body.first_name + "'", "'" + req.body.last_name + "'",

       // _________________________________________________________  

        req.body.birth_date, 

       // _________________________________________________________ 

       "'" + req.body.sex + "'", "'" + req.body.allergies + "'", 

       // _________________________________________________________ 

       "'" + req.body.allergy1 + "'", "'" + req.body.allergy2 + "'"
       
      ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });

  console.log(req.body);

});





console.log(registration);


//get all children records
// router.post('/api/register', function(req, res) {
// 	//using req.body (which is the parent info object we get from the $.post to api/register), we are going to use sequelize to take all the information from this object, and use it to create a new record in our database. 	
// 	 registration.create(
//     ["password", 'test'],

//     [req.body.password], 

//     function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });

// 

// var newChild = require("../public/js/register.js");




// app.get("/api/register", function(req, res) {

//   res.json(registration);
  // connection.query("INSERT INTO Parents (username,password) VALUES (?, ?)", [req.body.username, req.body.password], function(
  //   err,
  //   result
  // ) {
  //   if (err) {
  //     // If an error occurred, send a generic server faliure
  //     return res.status(500).end();
  //   }

  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });
// });
// router.get('/api/register', function(req, res) {
  
//    registration.create(
//     ["password", 'test'],

//     [req.body.password], 

//     function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });

// });



// //get all children records
// router.get("/api/children", function(req, res) {
		
// });

// //add a new record to the "children" table
// router.post("/api/children", function(req, res) {

// });

// //update information on a single child
// router.put("/api/children/:id", function(req, res) {

// });

// //add a new record to the "parents" table
// router.post("/api/parents", function(req, res) {

// });

// //update information on a single parent
//note: we will only really use this if we want to do something like update the contact information for a parent, so we can save it for later. 

// router.put("/api/parents/:id", function(req, res) {

// });


//note: staff is also low priority as far as getting your UI working goes. for now, you can just add / remove /modify staff members via SQL workbench

//add a new record to the "staff" table
// router.post("/api/staff", function(req, res) {

// });

// //update information on a single staff member
// router.put("/api/staff/:id", function(req, res) {

// });

// Export routes for server.js to use.
module.exports = router;

