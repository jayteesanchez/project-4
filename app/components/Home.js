import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: HomeStore.getState() };
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
    this.setState({ questions: state});
  }

  handleClick(key, question) {
    var id = question.id;
    var choice = key;
    HomeActions.vote(choice, id);
  }

  render() {

      return (
      <div className='container'>
        <div className='row'>
          { this.state.questions.questions.map((question, index) => {
          <div key={question.id} className={index === 0 ? 'col-xs-12 col-sm-12 col-md-10 col-md-offset-1' : 'col-xs-12 col-sm-12 col-md-10'}>
            <h3 className='text-center'>{question.question}</h3>
            <div className='thumbnail fadeInUp animated'>
              <img key={question.votes.votes_choice_1} onClick={this.handleClick.bind(key, question)} src={question.choice1_img}/>
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
            <div className='thumbnail fadeInUp animated'>
              <img key={question.votes.votes_choice_2} onClick={this.handleClick.bind(key, question)} src={question.choice2_img}/>
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
          })
          }
        </div>
      </div>
      );
    }
  }

export default Home;
