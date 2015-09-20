import alt from '../alt';
import AddQuestionActions from '../actions/AddQuestionActions';

class AddQuestionStore {
  constructor() {
    this.bindActions(AddQuestionActions);
    this.question = '';
    this.choice1 = '';
    this.choice1_img = '';
    this.choice2 = '';
    this.choice2_img = '';
    this.helpBlock = '';
    this.askValidationState = '';
    this.questionValidationState = '';
    this.choice1ValidationState = '';
    this.choice1_imgValidationState = '';
    this.choice2ValidationState = '';
    this.choice2_imgValidationState = '';
  }

  onAddQuestionSuccess(successMessage) {
    this.askValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddQuestionFail(errorMessage) {
    this.askValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateQuestion(event) {
    this.question = event.target.value;
    this.questionValidationState = '';
    this.helpBlock = '';
  }

  onUpdateChoice1(event) {
    this.choice1 = event.target.value;
    this.choice1ValidationState = '';
  }

  onUpdateChoice1_img(event) {
    this.choice1_img = event.target.value;
    this.choice1_imgValidationState = '';
  }

  onUpdateChoice2(event) {
    this.choice2 = event.target.value;
    this.choice2ValidationState = '';
  }

  onUpdateChoice2_img(event) {
    this.choice2_img = event.target.value;
    this.choice2_imgValidationState = '';
  }

  onInvalid() {
    this.questionValidationState = 'has-error';
    this.helpBlock = 'Something went wrong, Please try again.';
  }
}

export default alt.createStore(AddQuestionStore);
