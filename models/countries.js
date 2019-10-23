var mongo = require("mongoose");

var countries = mongo.model(
  "country",
  mongo.Schema({
    name: String,
    code: String
  }),
  "countries"
);

module.exports = countries;
