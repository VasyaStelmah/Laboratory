const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    index: true,
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Users", users);
