import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getQuestion();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(question) {
    var winner = 'winner' ;
    var loser = 'loser';
    HomeActions.vote(winner, loser);
  }

  render() {
var imageResize ={
  width: '300px',
  height: '300px'
}

var newQuestions = [
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'What should I eat?',
  choice1: 'Taco Bell?',
  choice1_img: 'http://hackthemenu.com/wp-content/uploads/2013/08/taco-bell-logo.jpg',
  votes_choice_1: '2',
  choice2: 'KFC',
  choice2_img: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg',
  votes_choice_2: '2',
  expiration: '4.0'
  },
  {
  user_id: '55d2ad76f7985b32e5f68ad2',
  question: 'Where Should I go',
  choice2: 'San Diego',
  choice2_img: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u',
  votes_choice_1: '1',
  choice1: 'KFC?',
  choice1_img: 'http://www.bluemaumau.org/sites/default/files/KFCLogo.jpg',
  votes_choice_2: '0',
  downVote: '1',
  expiration: '2.0'
  }
];
    var question = newQuestions.map((question, index) => {
      return (
        <div className={index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'}>
          <div className='thumbnail fadeInUp animated'>
            <img style={imageResize} src={question.choice1_img}/>
            <div className='caption text-center'>
              <ul className='list-inline'>
                <li><strong> </strong> {}</li>
                <li><strong>{question.choice1}</strong> {}</li>
              </ul>
              <h4>
                <Link to={'/questions/'}><strong>{}</strong></Link>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <h3 className='text-center'>What should I eat for dinner tonight?</h3>
        <div className='row'>
          {question}
        </div>
      </div>
    );
  }
}

export default Home;
