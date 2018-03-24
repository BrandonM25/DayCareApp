var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var path = require("path");

var exphbs = require("express-handlebars");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// Set Handlebars.

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({ defaultLayout: "main"}));

app.set('view engine', 'handlebars');

var children = ['Sam', 'Susie', 'Paulie']

app.get('/', function(req,res){
  res.render('home', {
  	parent_name: 'susie',
  	child_name: 'sarah',
  	children: children
  });
})


app.listen(app.get(PORT), function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + app.get(PORT));

});


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
