var mongoose = require('mongoose');
var _ = require('lodash');
var Question = mongoose.model('Question');


/**
 * List
 */
function getAllQuestions(req, res) {
  Question.find({}).exec(function(err, questions) {
    if(!err) {
      res.json(questions);
    }else {
      console.log('Error in first query');
    }
  });
};

/**
 * Add a Question
 */
function addQuestion(req, res) {
  Question.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send('Added successfully');
  });
};

/**
 * Update a Question
 */
function updateQuestion(req, res) {
  var query = { id: req.body.id };
  var isIncrement = req.body.isIncrement;
  var isFull = req.body.isFull;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _.omit(req.body, omitKeys);

  if(isFull) {
    Question.findOneAndUpdate(query, data, function(err, data) {
      if(err) {
        console.log('Error on save!');
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  } else {
    Question.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1: -1 } }, function(err, data) {
      if(err) {
        console.log('Error on save!');
        // Not sure if server status is the correct status to return
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  }

};

/**
 *
 */
function increment(req, res) {
  var query = { id: req.body.id };

};

/**
 * Remove a Question
 */
function removeQuestion(req, res) {
  var query = { id: req.body.id };
  Question.findOneAndRemove(query, function(err, data) {
    if(err) console.log('Error on delete');
    res.status(200).send('Removed Successfully');
  });
};

module.exports = {
  getAllQuestions: getAllQuestions,
  addQuestion:     addQuestion,
  updateQuestion:  updateQuestion,
  increment:       increment,
  removeQuestion:  removeQuestion
}
