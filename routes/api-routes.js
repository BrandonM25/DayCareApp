var express = require("express");

var router = express.Router();

var app = express();

var path = require("path");

var registration = require("../models/children.js");

// var connection = require("../config/connection.js");

router.post("/api/register", function(req, res) {


    registration.create([
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
   // make to connection to the database.

    // if connection is successful
    // connection.query("INSERT INTO parents (username, password, first_name, last_name, spouse_id, email, street, city, state, zip, phone, emergency_name, emergency_phnum) values ('Anisha','test','test','test', 1, 'test','test','test','tt',3009, 770-122-3312, 'test','test')", function (err, result) {
    //   // if any error while executing above query, throw error
    //   if (err) throw err;
    //   // if there is no error, you have the result
    //   console.log(result);
    // });
 

  // console.log('hey');
  // console.log(req.body.password);
  console.log(req.body);
  // registration.create(["password", "username"], [req.body.password, req.body.username], function(result) {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });
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

