var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var questionsController = require('../controllers/questions');

// var AllowCrossOrigin function(request, response, next) {
//   response.header('Access-Control-Allow-Origin', '*');
//   response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//   if("OPTIONS" == request.method) {
//     response.send(200);
//   }
//   else {
//     next();
//   }
// };

// http://127.0.0.1:3000/questions
router.route('/questions')

  // all questions
  .get(questionsController.getAll)

  // a new Question
  .post(questionsController.createQuestion);


router.route('/questions/:id')

  // return specific Question
  .get(questionsController.getOneQuestion)

  // update existing Question
  .put(questionsController.updateQuestion)

  // remove specific Question from DB
  .delete(questionsController.removeQuestion);

router.get('/questions/top', questionsController.topQuestions);

router.get('/questions/count', questionsController.questionCount);

router.get('/questions/search', questionsController.searchQuestions);



module.exports = router

