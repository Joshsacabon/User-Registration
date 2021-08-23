const mongoose = require("mongoose");

const User = mongoose.Schema({
  Fname: {
    type: String,
  },
  Mname: {
    type: String,
  },
  Lname: {
    type: String,
  },
  Birthday: {
    type: String,
  },
  Age: {
    type: String,
  },
  EmailAdd: {
    type: String,
  },
  CellNumber: {
    type: String,
  },
  Gender: {
    type: String,
  },
  SAddress: {
    type: String,
  },
  City: {
    type: String,
  },
  Province: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  country: {
    type: String,
  }

});

module.exports = mongoose.model("User", User);