/**
 * Routes for express app
 */
var express             = require('express');
var mongoose            = require('mongoose');
var questionsController = require('../controllers/questions');
var usersController     = require('../controllers/users');
var _                   = require('lodash');
var Question            = mongoose.model('Question');
var Header              = require('../../public/assets/header.server');
var App                 = require('../../public/assets/app.server');

module.exports = function(app, passport) {
  // user routes
  app.post('/login',  usersController.login);
  app.post('/signup', usersController.signUp);
  app.get('/logout',  usersController.logout);

  // question routes
  app.get('/questions', questionsController.getAllQuestions);

  app.post('/questions', function(req, res) {
    questionsController.addQuestion(req, res);
  });

  app.put('/questions', function(req, res) {
    questionsController.updateQuestion(req, res);
  });

  app.delete('/questions', function(req, res) {
    questionsController.removeQuestion(req, res);
  });

  // Retrieves all questions on any endpoint
  app.get('*', function(req, res, next) {
    Question.find({}).exec(function(err, questions) {
      if(!err) {
        var questionMap = _.indexBy(questions, 'id');
        // We don't want to be seeding and generating markup with user information
        var user = req.user ? { authenticated: true, isWaiting: false } : { authenticated: false, isWaiting: false };
        // An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during
        // that request/response cycle (if any). Otherwise, this property is identical to app.locals
        // This property is useful for exposing request-level information such as request path name, authenticated user, user settings, and so on.
        // pass in data to be seeded into the TopicStore
        res.locals.data =  {
          QuestionStore: { questions: questionMap},
          UserStore: { user: user }
        };
        next();
      }else {
        console.log('Error in first query');
        res.status(500).send(err);
      }
    });
  });

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
    var html = App(JSON.stringify(res.locals.data || {}), req, res);
    html = html.replace("TITLE", Header.title)
                .replace("META", Header.meta);

    if(process.env.NODE_ENV === 'devhotloader') {
      html = html.replace("LINK", '');
    } else {
      html = html.replace("LINK", Header.link);
    }

    res.contentType = "text/html; charset=utf8";
    res.end(html);
  });

};;
