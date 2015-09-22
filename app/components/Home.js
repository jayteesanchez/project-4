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
    HomeActions.getQuestions();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(question, event) {
    //handles the events for hiding hint display
    if(event.target.id === 'clickDisplay'){
    document.getElementById('hintDisplay').style.display = '';
    document.getElementById('clickDisplay').style.display = 'none';
    }else {
    document.getElementById('hintDisplay').style.display = 'none';
    document.getElementById('clickDisplay').style.display = '';
    }
    //handles the voting Action
    var choice = event.target.alt;
    var id = question._id;

    if (choice === 'votes_choice_1'){
    var count = question.votes_choice_1;
    HomeActions.vote1(id, count);
    }
    if (choice === 'votes_choice_2'){
    var count = question.votes_choice_2;
    HomeActions.vote2(id, count);
    }
    var count = 0;
    }

  downVoting(question, event) {

  }

  changeQuestions(question, event) {
  //handles the question reveal/hide clicks
    var change = true;
    if(question.display) var change = false;
    var id = question._id;
    HomeActions.changeDisplay(id, change);
  }

  render() {
    var resizeImg = {
      width: '275px',
      height: '275px'
    }

    var hidden = {
      display: 'none'
    }

    var currentQuestions = this.state.questions.questions;
    if (currentQuestions) {
    var allQuestions = currentQuestions.reverse().map((question, index) => {
      if(question.display){
      return (
        <div key={question._id} className='row fadeInUp animated' onClick={this.changeQuestions.bind(this, question)}>
            <h3 className='text-center'>
              {question.question}?
            </h3>
          <div className={'col-xs-6 col-sm-6 col-md-5 col-md-offset-1'}>
            <div className='thumbnail fadeInUp animated'>
              <img style={resizeImg} alt={'votes_choice_1'} onClick={this.handleClick.bind(event, question)} src={question.choice1_img}/>
              <div className='caption text-center'>
                <ul className='list-inline'>
                  <li><strong>{question.choice1}</strong></li>
                  <li><strong>Votes for:</strong></li>
                  <li><strong>{question.votes_choice_1}</strong></li>
                </ul>
              </div>
            </div>
          </div>
            <div className={'col-xs-6 col-sm-6 col-md-5'}>
              <div className='thumbnail fadeInUp animated'>
                <img style={resizeImg} alt={'votes_choice_2'} onClick={this.handleClick.bind(event, question)} src={question.choice2_img}/>
                <div className='caption text-center'>
                  <ul className='list-inline'>
                    <li><strong>{question.choice2}</strong></li>
                    <li><strong>Votes for:</strong></li>
                    <li><strong>{question.votes_choice_2}</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className='text-center'>
              <button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-thumbs-down"></span> Unlike
              </button>
              <span>{question.downVote}</span>
            </h3>
        </div>
      );
      }
      if(!question.display){
      return (
      <div key={question._id} alt={ question.index } className='row thumbnail flipInX animated' onClick={this.changeQuestions.bind(this, question)}>
        <h3 className='text-center'>{question.question}?</h3>
        <h6 className='text-center'>
          <strong>{question.choice1}</strong>
            <text> or </text>
          <strong>{question.choice2}</strong><br></br>
          <text>Number of times voted:</text><br></br>
          <strong>{question.votes_choice_1 + question.votes_choice_2}</strong>
        </h6>
      </div>
      );
      }
    });

    return (
      <div className='container fadeInUp animated'>
        <div className='row'>
          <h6 className='text-center fadeIn animated' id='clickDisplay' onClick={this.handleClick.bind(event, this.id)}>Click for how to play...</h6>
          <h6 className='text-center fadeIn animated' style={hidden} id='hintDisplay' onClick={this.handleClick.bind(event, this.id)}>
          <p>Click on a title to expand or shrink a question, </p>
          <p>DownVote for Bad Questions - a total of 4 means deletion, </p>
          <p>Have fun!</p>
          </h6>
        </div>
          {allQuestions}
      </div>
    );
  }
  return (
    <div className='container'>
        <div className='row'>
          <h1>{this.state.questions}</h1>
        </div>
      </div>
    );
}

}

export default Home;
