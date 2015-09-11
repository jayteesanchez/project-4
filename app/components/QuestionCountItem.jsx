import React from 'react';

import styles from 'scss/components/_vote';

export default class QuestionCountItem extends React.Component {
  render() {
    return (
      <li className={styles['scoreboard__list-item']} key={this.props.key}>
        <span className={styles.scoreboard__topic}>{this.props.question}</span>
        <span className={styles.scoreboard__count}>{this.props.votes.votes_choice_1}</span>
        <span className={styles.scoreboard__count}>{this.props.votes.votes_choice_2}</span>
      </li>
    );
  }
}

QuestionCountItem.propTypes = {
  key: React.PropTypes.string,
  question: React.PropTypes.string,
  votes: {
    votes_choice_1: React.PropTypes.number,
    votes_choice_2: React.PropTypes.number
  }
};
