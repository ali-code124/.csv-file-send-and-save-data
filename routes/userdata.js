// models/user.js

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/newdb");

const userSchema = new mongoose.Schema({
  username: String,
  userid: String,
  password: String,
  email: String
});

module.exports = mongoose.model('Userinfo', userSchema);
