import React from 'react';
import QuestionActions from 'actions/QuestionActions';
import QuestionTextInput from 'components/QuestionTextInput';

import styles from 'scss/components/_entrybox';

export default class EntryBox extends React.Component {
  /**
   * Event handler called within QuestionTextInput.
   * Defining this here allows QuestionTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave = (question) => {
    QuestionActions.create(question);
  }

  _onChange = (question) => {
    QuestionActions.typing(question);
  }

  render() {
    return (
      <div className={styles.entrybox}>
        <h1 className={styles.entrybox__header}>Help make these choices!</h1>
        <QuestionTextInput className={styles.entrybox__input} value={this.props.question} placeholder="Question..." onChange={this._onChange} onSave={this._onSave} />
        <QuestionTextInput className={styles.entrybox__input} value={this.props.choice1} placeholder="Choice 1" onChange={this._onChange} onSave={this._onSave} />
        <QuestionTextInput className={styles.entrybox__input} value={this.props.choice1_img} placeholder="Choice 1 Image URL" onChange={this._onChange} onSave={this._onSave} />
        <QuestionTextInput className={styles.entrybox__input} value={this.props.choice2} placeholder="Choice 2" onChange={this._onChange} onSave={this._onSave} />
        <QuestionTextInput className={styles.entrybox__input} value={this.props.choice2_img} placeholder="Choice 2 Image URL" onChange={this._onChange} onSave={this._onSave} />
      </div>
    );
  }
}

EntryBox.propTypes = {
  question: React.PropTypes.string,
  choice1: React.PropTypes.string,
  choice1_img: React.PropTypes.string,
  choice2: React.PropTypes.string,
  choice2_img: React.PropTypes.string

  };
