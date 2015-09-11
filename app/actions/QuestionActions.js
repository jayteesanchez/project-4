import alt from 'altInstance';
import QuestionWebAPIUtils from 'utils/QuestionWebAPIUtils';

class QuestionActions {

  /*
   * @param question that user wishes to save
   */
  create(question) {
    // Remove whitespace
    if (question.trim().length > 0) {
      // Using the current timestamp in place of a real id.
      const id = Date.now().toString();
      const data = {
        id: id,
        question: question,
        choice1: choice1,
        choice1_img: choice1_img,
        choice2: choice2,
        choice2_img: choice2_img
      };

      // This dispatches for views to make optimistic updates
      this.dispatch(data);
      // Makes an additional call to the server API and actually adds the Question
      QuestionWebAPIUtils.addQuestion(data)
        .done(function success() {
          // We might not need to do anything it successfully added due to optimistic updates.
        })
        .fail(function failure() {
          // dispatch an event if fails to notify user that it has failed
        });
    }
  }

  /*
   * @param String Question id to increment with
   */
  increment(id, vote) {
    this.dispatch(id, vote);

    QuestionWebAPIUtils.updateQuestion({ id: id, votes: vote }, false, true);
  }

  /*
   * @param String Question id to decrement with
   */
  decrement(id, vote) {
    this.dispatch(id, vote);

    QuestionWebAPIUtils.updateQuestion({ id: id, votes: vote}, false, false);
  }

  /*
   * @param String Question id to destroy
   */
  destroy(id) {
    this.dispatch(id);

    // Keeping it consistent with the above
    QuestionWebAPIUtils.deleteQuestion({id: id});
  }

  /*
   *  @param String question that user is typing in input field
   */
  typing(question) {
    this.dispatch(question);
  }

}

export default alt.createActions(QuestionActions);
