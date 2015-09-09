var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var questionsController = require('../controllers/questions');

// http://127.0.0.1:3000/questions
router.route('/questions')

  // all questions
  .get(questionsController.getAll)

  // a new Question
  .post(questionsController.createQuestion);


router.route('/questions/:id')

  // return specific Question
  .get(questionsController.getQuestion)

  // update existing Question
  .patch(questionsController.updateQuestion)

  // remove specific Question from DB
  .delete(questionsController.removeQuestion);

router.get('/questions/top', questionsController.topQuestions);

router.get('/questions/count', questionsController.questionCount);

router.get('/questions/search', questionsController.searchQuestions);


module.exports = router

