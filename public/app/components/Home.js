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
    var choice = question.votes_choice_ + (1 || 2);
    var loser = this.state.questions[1 - this.state.questions.indexOf(choice)]._id;
    HomeActions.vote(choice, loser);
  }

  render() {
    var question = this.state.questions.map((question, index) => {
      return (
        <div key={question._id} className='col-xs-6 col-sm-8 col-md-12'>

          <div className='thumbnail fadeInUp animated'>
            <img onClick={this.handleClick.bind(this, question.votes_choice_1)} src={question.choice1_img}/>
            <div className='caption text-center'>
              <li><strong>Choice 1:</strong> {question.choice1}</li>
            </div>
          <div>

          <div className='thumbnail fadeInUp animated'>
            <img onClick={this.handleClick.bind(this, question.votes_choice_2)} src={question.choice2_img}/>
            <div className='caption text-center'>
              <li><strong>Choice 2:</strong> {question.choice2}</li>
            </div>
          </div>

            <div className='caption text-center'>
              <ul className='list-inline'>
                <li><strong>Posted Date:</strong> {question.posted_date}</li>
                <li><strong>Expires:</strong> {question.expireAt}</li>
              </ul>
              <h4>
                <button className='btn btn-danger' onClick={this.handleClick.bind(this, question)}><strong>I dont like either choice...</strong></button>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <h3 className='text-center'>Click on the portrait. Select your favorite.</h3>
        <div className='row'>
          {question}
        </div>
      </div>
    );
  }
}

export default Home;
