var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var scrape = require(". cheerio/scripts/scrape");


var PORT = process.env.PORT || 3000;
// Instantiate our Express App
var app = express();
// Require our routes
var routes = require("./routes");

// Designate our public folder as a static directory
app.use(express.static("public"));
// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Have every request go through our route middleware
app.use(routes);
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});
// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});