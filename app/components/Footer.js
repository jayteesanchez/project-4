import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopQuestions();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let topQuestions = this.state.questions.map(function(question) {
      return (
        <li key={question._id}>
          <Link to={'/questions/' + question._id}>
            <img className='thumb-md' src={question.choice1_img} />
          </Link>
        </li>
      );
    });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux (alt) architecture and server-side rendering.</p>
              <p>You may view the <a href='https://github.com/jayteesanchez/project-4'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2015 Jaytee Sanchez</p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Voted Questions</h3>
              <ul className='list-inline'>
                {topQuestions}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
