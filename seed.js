var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-4');

var Question = require('./models/Question');

// callback-style
Question.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All Questions removed...");
});

var newQuestions = [
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'What should I eat?',
  choice1: 'Taco Bell',
  choice1_img: 'http://hackthemenu.com/wp-content/uploads/2013/08/taco-bell-logo.jpg',
  votes_choice_1: 2,
  votes_choice_2: 2,
  choice2: 'KFC',
  choice2_img: 'http://digitaldeconstruction.com/wp-content/uploads/2015/07/KFC.jpg',
  downVote: 1,
  display: true
  },
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'Where Should I go',
  choice1: 'San Diego',
  choice1_img: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u',
  votes_choice_1: 1,
  votes_choice_2: 0,
  choice2: 'Las Vegas',
  choice2_img: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg',
  downVote: 1,
  display: false
  },
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'Which color shirt?',
  choice1: 'Blue',
  choice1_img: 'http://hackthemenu.com/wp-content/uploads/2013/08/taco-bell-logo.jpg',
  votes_choice_1: 2,
  votes_choice_2: 5,
  choice2: 'Black',
  choice2_img: 'http://digitaldeconstruction.com/wp-content/uploads/2015/07/KFC.jpg',
  downVote: 1,
  display: false
  },
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'How should i get there?',
  choice1: 'Fly',
  choice1_img: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u',
  votes_choice_1: 3,
  votes_choice_2: 3,
  choice2: 'Drive',
  choice2_img: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg',
  downVote: 1,
  display: false
  },
    {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'Which bootcamp?',
  choice1: 'General Assembly DTLA',
  choice1_img: 'http://hackthemenu.com/wp-content/uploads/2013/08/taco-bell-logo.jpg',
  votes_choice_1: 2,
  votes_choice_2: 7,
  choice2: 'General Assembly LA',
  choice2_img: 'http://digitaldeconstruction.com/wp-content/uploads/2015/07/KFC.jpg',
  downVote: 1,
  display: false
  },
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'Which Framework?',
  choice1: 'AngularJS',
  choice1_img: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u',
  votes_choice_1: 9,
  votes_choice_2: 3,
  choice2: 'ReactJS',
  choice2_img: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg',
  downVote: 1,
  display: false
  },
    {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'Cant decide...',
  choice1: 'Ruby on Rails',
  choice1_img: 'http://hackthemenu.com/wp-content/uploads/2013/08/taco-bell-logo.jpg',
  votes_choice_1: 8,
  votes_choice_2: 3,
  choice2: 'Express/NodeJS',
  choice2_img: 'http://digitaldeconstruction.com/wp-content/uploads/2015/07/KFC.jpg',
  downVote: 1,
  display: false
  },
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'Which job would you prefer?',
  choice1: 'Front-End Developer',
  choice1_img: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u',
  votes_choice_1: 5,
  votes_choice_2: 3,
  choice2: 'Back-End Developer',
  choice2_img: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg',
  downVote: 1,
  display: false
  }

];

// promise-style
Question
  .create(newQuestions)
  .then(
    function(Questions) {
      console.log(Questions.length + " Questions seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });
