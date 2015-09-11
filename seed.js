// var mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost/project-4');

// var Question = require('./models/Question');

// // callback-style
// Question.remove({}, function(err) {
//   if (err) console.log(err);
//   console.log("All Questions removed...");
// });

// var newQuestions = [
//   {
//   user_id: '55d2ad76f7985b32e5f68ad2',
//   question: 'What should I eat?',
//   choice1: 'Taco Bell',
//   choice1_img: 'http://hackthemenu.com/wp-content/uploads/2013/08/taco-bell-logo.jpg',
//   votes_choice_1: '2',
//   choice2: 'KFC',
//   choice2_img: 'http://digitaldeconstruction.com/wp-content/uploads/2015/07/KFC.jpg',
//   votes_choice_2: '2',
//   expiration: '4.0'
//   },
//   {
//   user_id: '55d2ad76f7985b32e5f68ad2',
//   question: 'Where Should I go',
//   choice1: 'San Diego',
//   choice1_img: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u',
//   votes_choice_1: '1',
//   choice2: 'Las Vegas',
//   choice2_img: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg',
//   votes_choice_2: '0',
//   downVote: '1',
//   expiration: '2.0'
//   }
// ];

// // promise-style
// Question
//   .create(newQuestions)
//   .then(
//     function(Questions) {
//       console.log(Questions.length + " Questions seeded.");
//     }, function(err) {
//       console.log(err);
//   })
//   .then(function() {
//     mongoose.disconnect();
//   });
