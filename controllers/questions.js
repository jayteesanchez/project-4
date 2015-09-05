var Question = require('../models/Question');

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

  var question = new Question(request.body);

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

module.exports = {
  getAll: getAll,
  createQuestion: createQuestion,
  getQuestion: getQuestion,
  updateQuestion: updateQuestion,
  removeQuestion: removeQuestion
}
