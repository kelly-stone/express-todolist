var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require("mongoose");

//mlab.com
mongoose.connect(
  "mongodb://kellyatwellington:kellyatwellington@ds231517.mlab.com:31517/todos"
);

var todoSchema = new mongoose.Schema({
  item: String
});

var data = [{ item: "shopping" }, { item: "eating" }, { item: "coding" }];

module.exports = function(app) {
  app.get("/todo", function(req, res) {
    res.render("todo", { todos: data }); //todos from ejs
  });

  app.post("/todo", urlencodedParser, function(req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", function(req, res) {
    data = data.filter(function(todo) {
      return todo.item.replace(/ /g, "-") != req.params.item;
    });
    res.json(data);
  });
};
