var express = require("express");
var app = express();
cors = require("cors");

var croute = require("./routes/croute");
var wroute = require("./routes/wroute");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nodedb");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("mongo db connection is open");
});

app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/countries", croute);
app.use("/winners", wroute);

app.listen("5432", function() {
  console.log("Server listening in 5432");
});
