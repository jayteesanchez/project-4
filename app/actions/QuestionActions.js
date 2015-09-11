import alt from 'altInstance';
import QuestionWebAPIUtils from 'utils/QuestionWebAPIUtils';

class QuestionActions {

  /*
   * @param text that user wishes to save
   */
  create(text) {
    // Remove whitespace
    if (text.trim().length > 0) {
      // Using the current timestamp in place of a real id.
      const id = Date.now().toString();
      const data = {
        id: id,
        count: 1,
        text: text
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
  increment(id) {
    this.dispatch(id);

    QuestionWebAPIUtils.updateQuestion({ id: id }, false, true);
  }

  /*
   * @param String Question id to decrement with
   */
  decrement(id) {
    this.dispatch(id);

    QuestionWebAPIUtils.updateQuestion({ id: id }, false, false);
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
   *  @param String text that user is typing in input field
   */
  typing(text) {
    this.dispatch(text);
  }

}

export default alt.createActions(QuestionActions);