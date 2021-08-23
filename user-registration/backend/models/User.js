const mongoose = require("mongoose");

const User = mongoose.Schema({
  Lname: {
    type: String,
  },

});

module.exports = mongoose.model("User", User);