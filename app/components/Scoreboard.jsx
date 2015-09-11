import React from 'react';
import Immutable from 'immutable';
import QuestionCountItem from 'components/QuestionCountItem';

import styles from 'scss/components/_vote';

export default class Scoreboard extends React.Component {
  render() {
    const questionListItems = this.props.topics.toKeyedSeq().map((question, key) => {
      return (<QuestionCountItem
        key={key}
        question={question.get('question')}
        choice1= {question.get('choice1')}
        votesChoice1={question.get('votes.votes_choice_1')}
        choice2= {question.get('choice2')}
        votesChoice2={question.get('votes.votes_choice_2')}/>);
    }).toArray();
    return (
      <div className={styles.scoreboard}>
        <h3 className={styles.scoreboard__header}>Vote count</h3>
        <ul className={styles.scoreboard__list}>
          {questionListItems}
        </ul>
      </div>
    );
  }
}

Scoreboard.propTypes = { topics: React.PropTypes.instanceOf(Immutable.OrderedMap) };
