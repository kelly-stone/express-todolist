var express = require("express");

var todoController = require("./controllers/todoController");

var app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));

todoController(app); //app means todoController.js function(app)

app.listen(5001, function() {
  console.log("server started on port 5001...");
});
