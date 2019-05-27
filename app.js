const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.listen(5000, function() {
  console.log("server started on port 5000...");
});
