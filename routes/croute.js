var route = require("express").Router();
var countries = require("../models/countries");

route.get("/all", (request, response) => {
  countries.find({}, { _id: 0 }, (err, data) => {
    if (err) response.sendStatus(500);
    else response.json(data);
  });
});

module.exports = route;
