var data = [{ item: "shopping" }, { item: "eating" }, { item: "coding" }];

module.exports = function(app) {
  app.get("/todo", function(req, res) {
    res.render("todo", { todos: data }); //todos from ejs
  });

  app.post("/todo", function(req, res) {});

  app.delete("/todo", function(req, res) {});
};
