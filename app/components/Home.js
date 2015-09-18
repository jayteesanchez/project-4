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
    var choice = event.target.alt;
    var id = question._id;
    HomeActions.vote(choice, id);
  }

  render() {
    var resizeImg = {
      width: '300px',
      height: '300px'
    }

    if (this.state.questions.questions) {
    var allQuestions = this.state.questions.questions.map((question, index) => {
      return (
        <div key={question._id} className='row'>
            <h3 className='text-center'>{question.question}</h3>
          <div className={'col-xs-6 col-sm-6 col-md-5 col-md-offset-1'}>
            <div className='thumbnail fadeInUp animated'>
              <img style={resizeImg} alt={'votes_choice_1'} onClick={this.handleClick.bind(event, question)} src={question.choice1_img}/>
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
            <div className={'col-xs-6 col-sm-6 col-md-5'}>
              <div className='thumbnail fadeInUp animated'>
                <img style={resizeImg} alt={'votes_choice_2'} onClick={this.handleClick.bind(event, question)} src={question.choice2_img}/>
                <div className='caption text-center'>
                  <ul className='list-inline'>
                    <li><strong> </strong> {}</li>
                    <li><strong>{question.choice2}</strong> {}</li>
                  </ul>
                  <h4>
                    <Link to={'/questions/'}><strong>{}</strong></Link>
                  </h4>
                </div>
              </div>
            </div>
        </div>
      );
    });

    return (
      <div className='container'>
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
