var mongo = require("mongoose");

var winners = mongo.model(
  "winn",
  mongo.Schema({
    firstname: String,
    bornCountry: String,
    prizes: [{ year: String, category: String }]
  }),
  "winners"
);

module.exports = winners;
