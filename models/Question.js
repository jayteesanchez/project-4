var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question:             String,
  choice1:              String,
  choice1_img:          String,
  votes_choice_1:       { type: Number, default: 0 },
  choice2:              String,
  choice2_img:          String,
  votes_choice_2:       { type: Number, default: 0 },
  downVote:             { type: Number, default: 0 },
  posted_date:          { type: Date, default: Date.now },
  expiration:           String,
  user_id:              { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Question', QuestionSchema);

