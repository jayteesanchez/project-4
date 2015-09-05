var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  user_id:      String,
  question:     String,
  choice1:      String,
  choice1-img:  String,
  choice2:      String,
  choice2-img:  String,
  upVote:       Number,
  downVote:     Number,
  expiration:   String
});

module.exports = mongoose.model('Post', PostSchema);

