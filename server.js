var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
// Dependencies
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "staff" }));
app.set("view engine", "handlebars");

// Data
var children = [];

// Routes
app.get("/staff.html", function(req, res) {
    for (var i = 0; i < children.length; i++) {
        if (children[i].child_id === req.params.child_id) {
            return res.render("children", children[i]);
        }
    }
});

// Initiate the listener.
//app.listen(port);
 var exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 app.set("view engine", "handlebars");

// Import routes and give the server access to them.

var htmlRoute = require("./routes/html-routes.js");

var apiRoute = require("./routes/api-routes.js");

app.use(htmlRoute);

app.use(apiRoute);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);

});

app.post()
