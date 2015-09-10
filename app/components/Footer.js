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
    let topQuestions = this.state.questions.map(function(Question) {
      return (
        <li key={Question._id}>
          <Link to={'/questions/' + Question._id}>
            <img className='thumb-md' src={Question.choice1_img} />
          </Link>
        </li>
      );
    });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux (alt) architecture and server-side rendering.</p>
              <p>You may view the <a href='https://github.com/jayteesanchez/project-4'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2015 Jaytee Sanchez</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
