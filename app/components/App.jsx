import React from 'react';
import AltContainer from 'alt/AltContainer';
import UserStore from 'stores/UserStore';
import QuestionStore from 'stores/QuestionStore';
import Navigation from 'components/Navigation';

import 'scss/main';

export default class App extends React.Component {
  render() {
    return (
      <AltContainer stores={{
        UserStore: UserStore,
        QuestionStore: QuestionStore
      }}>
        <Navigation />
        {this.props.children}
      </AltContainer>
    );
  }
}

App.propTypes = { children: React.PropTypes.object };
