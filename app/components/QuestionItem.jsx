import React from 'react';
import QuestionActions from 'actions/QuestionActions';

import styles from 'scss/components/_vote';

export default class QuestionItem extends React.Component {
  _onIncrement = () => {
    QuestionActions.increment(this.props.id);
  }

  _onDecrement = () => {
    QuestionActions.decrement(this.props.id);
  }

  _onDestroyClick = () => {
    QuestionActions.destroy(this.props.id);
  }

  render() {
    return (
      <li className={styles['question-item']} key={this.props.id}>

        <span className={styles['question-item__question']}>
          {this.props.question}
        </span>

        <span className={styles['question-item__question']}>
          <p>{this.props.choice1}</p>
          <p>{this.props.choice1_img}</p>
          <button className={styles['question-item__button'] + ' ' + styles['question-item__button--increment']} onClick={this.votes.votes_choice_1._onIncrement}>+</button>
          <button className={styles['question-item__button'] + ' ' + styles['question-item__button--decrement']} onClick={this.votes.votes_choice_1._onDecrement}>-</button>
        </span>
        <span className={styles['question-item__question']}>
          <p>{this.props.choice2}</p>
          <p>{this.props.choice2_img}</p>
          <button className={styles['question-item__button'] + ' ' + styles['question-item__button--increment']} onClick={this.votes.votes_choice_2._onIncrement}>+</button>
          <button className={styles['question-item__button'] + ' ' + styles['question-item__button--decrement']} onClick={this.votes.votes_choice_2._onDecrement}>-</button>
        </span>
        <button className={styles['question-item__button'] + ' ' + styles['question-item__button--destroy']} onClick={this._onDestroyClick}>{String.fromCharCode(215)}</button>
      </li>
    );
  }
}

QuestionItem.propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string
};
