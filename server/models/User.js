var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  img_url: String
});

module.exports = mongoose.model('User', UserSchema);

