var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var questionsController = require('../controllers/questions');

var allowCrossDomain = function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if("OPTIONS" == request.method) {
    response.send(200);
  }
  else {
    next();
  }
};

// http://127.0.0.1:3000/questions
router.route('/')

  // all questions
  .get(allowCrossDomain, questionsController.getAll)

  // a new Question
  .post(allowCrossDomain, questionsController.createQuestion);


router.route('/:id')

  // return specific Question
  .get(allowCrossDomain, questionsController.getOneQuestion)

  // update existing Question
  .patch(allowCrossDomain, questionsController.updateQuestion)

  // remove specific Question from DB
  .delete(allowCrossDomain, questionsController.removeQuestion);

router.get('/top', allowCrossDomain, questionsController.topQuestions);

router.get('/count', allowCrossDomain, questionsController.questionCount);

router.get('/search', allowCrossDomain, questionsController.searchQuestions);



module.exports = router

