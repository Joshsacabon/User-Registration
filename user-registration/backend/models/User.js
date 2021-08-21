const mongoose = require("mongoose");

const Todo = mongoose.Schema({
  Lname: {
    type: String,
  },

});

module.exports = mongoose.model("User", User);