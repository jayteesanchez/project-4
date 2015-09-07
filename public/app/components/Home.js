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

  handleClick(character) {
    var winner = question.;
    var loser = this.state.characters[1 - this.state.characters.indexOf(winner)].characterId;
    HomeActions.vote(winner, loser);
  }

  render() {
    var question = this.state.questions.map((question, index) => {
      return (
        <div key={question._id} className='col-xs-6 col-sm-6 col-md-5'>
          <div className='thumbnail fadeInUp animated'>
            <img onClick={this.handleClick.bind(this, question)} src={question.choice1_img}/>
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
