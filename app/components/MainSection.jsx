import React from 'react';
import Immutable from 'immutable';
import QuestionItem from 'components/QuestionItem';

import styles from 'scss/components/_vote';

export default class MainSection extends React.Component {
  render() {
    const questions = this.props.questions.toKeyedSeq().map((question, key) => {
      return (<QuestionItem id={key} key={key} question={question.get('question')} />);
    }).toArray();
    return (
      <div className={styles['main-section']}>
        <h3 className={styles['main-section__header']}>Help these People Make Choices!</h3>
        <ul className={styles['main-section__list']}>{questions}</ul>
      </div>
    );
  }
}

MainSection.propTypes = { questions: React.PropTypes.instanceOf(Immutable.OrderedMap) };
