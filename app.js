var express = require("express");

var todocontroller = require("./controllers/todocontroller");

var app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));

todocontroller(app); //app means todocontroller.js function(app)

app.listen(5001, function() {
  console.log("server started on port 5001...");
});
