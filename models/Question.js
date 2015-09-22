var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question:             String,
  choice1:              String,
  choice1_img:          String,
  votes_choice_1:       { type: Number, min: 0 },
  votes_choice_2:       { type: Number, min: 0 },
  choice2:              String,
  choice2_img:          String,
  downVote:             { type: Number, min: 0 },
  posted_date:          { type: Date, default: Date.now },
  display:              { type: Boolean, default: false }
});


module.exports = mongoose.model('Question', QuestionSchema);
