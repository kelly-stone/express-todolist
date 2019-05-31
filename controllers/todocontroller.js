var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = [{ item: "shopping" }, { item: "eating" }, { item: "coding" }];

module.exports = function(app) {
  app.get("/todo", function(req, res) {
    res.render("todo", { todos: data }); //todos from ejs
  });

  app.post("/todo", urlencodedParser, function(req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo", function(req, res) {});
};
