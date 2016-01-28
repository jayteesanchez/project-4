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
    HomeActions.changeDisplay(question);
    }
    if (choice === 'votes_choice_2'){
    var count = question.votes_choice_2;
    HomeActions.vote2(id, count);
    HomeActions.changeDisplay(question);
    }
    var count = 0;
    }

  downVoting(question, event) {
    //handles down voting logic
    var id = question._id;
    var count = question.downVote;
    if(count === 4){
    return HomeActions.removeQuestion(id);
    }
    HomeActions.downVote(id, count);
    HomeActions.changeDisplay(question);
  }

  changeQuestions(question, event) {
  //handles the question reveal/hide clicks
    var change = true;
    var id = question._id;
    HomeActions.changeDisplay(question);
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
        <div key={question._id} className='row fadeInUp animated text-center'>
            <h3 className='fadeIn animated' onClick={this.changeQuestions.bind(this, question)}>
              {question.question}?
            </h3>
          <div className='col-xs-6 col-sm-6 col-md-6'>
            <div className='thumbnail fadeInUp animated btn'>
              <img style={resizeImg} alt={'votes_choice_1'} onClick={this.handleClick.bind(event, question)} src={question.choice1_img}/>
              <div className='caption text-center'>
                <ul className='list-inline'>
                  <h4><strong>{question.choice1}</strong></h4><br></br>
                  <li><strong>Votes for:</strong></li>
                  <li><strong>{question.votes_choice_1}</strong></li>
                </ul>
              </div>
            </div>
          </div>
            <div className='col-xs-6 col-sm-6 col-md-6'>
              <div className='thumbnail fadeInUp animated btn'>
                <img style={resizeImg} alt={'votes_choice_2'} onClick={this.handleClick.bind(event, question)} src={question.choice2_img}/>
                <div className='caption text-center'>
                  <ul className='list-inline'>
                    <h4><strong>{question.choice2}</strong></h4><br></br>
                    <li><strong>Votes for:</strong></li>
                    <li><strong>{question.votes_choice_2}</strong></li>
                  </ul>
                </div>
              </div>
          </div>
            <h3 className='text-center'>
              <button className="btn btn-default btn-sm" onClick={this.downVoting.bind(event, question)}>
                <span className="glyphicon glyphicon-thumbs-down"></span>
                &nbsp;{question.downVote}
              </button>
            </h3>
        </div>
      );
      }
      if(!question.display){
      return (
      <div key={question._id} alt={ question.index } className='row thumbnail btn flipInX animated' onClick={this.changeQuestions.bind(this, question)}>
        <h4 className='text-center'>{question.question}?</h4>
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
      <div className='container fadeInUp animated text-center'>
        <div className='row'>
          <h6 className='text-center fadeIn animated btn' id='clickDisplay' onClick={this.handleClick.bind(event, this.id)}>CLICK HERE to learn how to play...</h6>
          <h6 className='text-center fadeIn animated btn' style={hidden} id='hintDisplay' onClick={this.handleClick.bind(event, this.id)}>
          <p>CLICK on a TITLE to expand or shrink a Question, </p>
          <p>DOWNVOTE for BAD Questions - a total of <strong>5</strong> means DELETION, </p>
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
          <h1>{this.state.questions}Not Loading Resources...</h1>
        </div>
      </div>
    );
}

}

export default Home;
