import React from 'react';

import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import Scoreboard from 'components/Scoreboard';

import styles from 'scss/components/_vote';

export default class Vote extends React.Component {

  render() {
    return (
      <div className={styles.vote}>
        <EntryBox topic={this.props.QuestionStore.newQuestion} />
        <MainSection topics={this.props.QuestionStore.questions} />
        <Scoreboard topics={this.props.QuestionStore.questions} />
      </div>
    );
  }
}

Vote.propTypes = {
  QuestionStore: React.PropTypes.object
};
