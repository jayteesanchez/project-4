var Question = require('../models/Question');

Question.prototype.totalVote = function() {
  return (votes_choice_1 + votes_choice_2);
}

// GET
function getAll(request, response) {
  Question.find(function(error, question) {
    if(error) response.json({message: 'Could not find any questions'});

    response.json({question: question});
  });
}

// POST
function createQuestion(request, response) {
  console.log('in Question');
  console.log('body:',request.body);

  var question = new Question({
  question:             req.body.question,
  choice1:              req.body.choice1,
  choice1_img:          req.body.choice1_img,
  choice2:              req.body.choice2,
  choice2_img:          req.body.choice2_img,
  expiration:           req.body.expiration,
  user_id:              req.user.id
});

Question.prototype.expireAt = function() {
  return (this.posted_date + this.expiration)
}

  question.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate question b/c:' + error});

    response.json({question: question});
  });
}

// GET
function getQuestion(request, response) {
  var id = request.params.id;

  Question.findById({_id: id}, function(error, question) {
    if(error) response.json({message: 'Could not find question b/c:' + error});

    response.json({question: question});
  });
}

function updateQuestion(request, response) {
  var id = request.params.id;

  Question.findById({_id: id}, function(error, question) {
    if(error) response.json({message: 'Could not find question b/c:' + error});

    if(request.body.question) question.question = request.body.question;
    if(request.body.choice1) question.choice1 = request.body.choice1;
    if(request.body.choice_1_img) question.choice_1_img = request.body.choice_1_img;
    if(request.body.votes_choice_1) question.votes_choice_1 = request.body.votes_choice_1;
    if(request.body.choice2) question.choice2 = request.body.choice2;
    if(request.body.choice_2_img) question.choice_2_img = request.body.choice_2_img;
    if(request.body.votes_choice_2) question.votes_choice_2 = request.body.votes_choice_2;
    if(request.body.downVote) question.downVote = request.body.downVote;
    if(request.body.expiration) question.expiration = request.body.expiration;


    Question.save(function(error) {
      if(error) response.json({messsage: 'Could not update question b/c:' + error});

      response.json({message: 'Question successfully updated', question: question});
    });
  });
}

function removeQuestion(request, response) {
  var id = request.params.id;

  Question.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete question b/c:' + error});

    response.json({message: 'Question successfully deleted'});
  });
}

function searchQuestions(request, response) {
  var question = new RegExp(request.query.question, 'i');

  Question.findOne({ question: question }, function(err, question) {
    if (err) return next(err);

    if (!question) {
      return res.status(404).send({ message: 'Question not found.' });
    }

    response.send(question);
  });
};

function questionCount (request, response) {
  Question.count({}, function(err, count) {
    if (err) return next(err);
    response.send({ count: count });
  });
};

function topQuestions (request, response) {
  var params = request.query;
  var conditions = {};

  _.each(params, function(value, key) {
    conditions[key] = new RegExp('^' + value + '$', 'i');
  });

  Question
    .find(conditions)
    .sort('-totalVote')
    .limit(100)
    .exec(function(err, questions) {
      if (err) return next(err);

      questions.sort(function(a, b) {
        if (a < b) { return 1; }
        if (a > b) { return -1; }
        return 0;
      });

      response.send(questions);
    });
};


module.exports = {
  getAll: getAll,
  createQuestion: createQuestion,
  getQuestion: getQuestion,
  updateQuestion: updateQuestion,
  removeQuestion: removeQuestion,
  searchQuestions: searchQuestions,
  questionCount: questionCount,
  topQuestions: topQuestions
}
