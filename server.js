// the are the node packages that our app will depend on ie the dependances
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

//setting our port to the "environment" it is hosted on or our own localhost: 3000; 
const PORT = process.env.PORT || 3000;

// initializing the express app
const app = express();

// directing our app to use the routes that we setup in the routes folder
const routes = require("./routes");

// the app should parse all input from the body into a JSON file
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// we need a static folder for our handlebars view engine so we set "public" to be it!
app.use(express.static("public"));

// this is handlebars connection to our express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// this directs our app to have every request go through our route middleware
app.use(routes);

// this variable directs our app to use MongoDB's CloudAtlas on Heroku or, to use our locally hosted db "mongoHeadlines" lol
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mel123:meldee@cluster0-xtipb.mongodb.net/test?retryWrites=true&w=majority";

// our connection to Mongo db
mongoose.connect(MONGODB_URI);

// directs the app to listen for Sam Jackson on this port.
app.listen(PORT, function() {
  console.log("Samuel Jackson is Listening on port: " + PORT);
});
