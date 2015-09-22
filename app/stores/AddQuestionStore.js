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
    this.questionValidationState = '';
    this.choice1ValidationState = '';
    this.choice1_imgValidationState = '';
    this.choice2ValidationState = '';
    this.choice2_imgValidationState = '';
  }

  onAddQuestionSuccess(successMessage) {
    this.question = '';
    this.choice1 = '';
    this.choice1_img = '';
    this.choice2 = '';
    this.choice2_img = '';
    this.helpBlock = '';
    this.questionValidationState = '';
    this.choice1ValidationState = '';
    this.choice1_imgValidationState = '';
    this.choice2ValidationState = '';
    this.choice2_imgValidationState = '';
    this.questionValidationState = 'has-success';
    toastr.success('You did it! Go Home and Vote or Add Another Question!');
  }

  onAddQuestionFail(errorMessage) {
    this.questionValidationState = 'has-error';
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

  onInvalidQuestion() {
    this.questionValidationState = 'has-error';
    this.helpBlock = 'Pick a better Question?';
  }

  onInvalidChoice1() {
    this.choice1ValidationState = 'has-error';
    this.helpBlock = 'Pick a better Choice?';
  }

  onInvalidChoice1_img() {
    this.choice1_imgValidationState = 'has-error';
    this.helpBlock = 'You can find an image online right?';
  }

  onInvalidChoice2() {
    this.choice2ValidationState = 'has-error';
    this.helpBlock = 'You got one good choice, you can think of 2.';
  }

  onInvalidChoice2_img() {
    this.choice2_imgValidationState = 'has-error';
    this.helpBlock = 'Almost, just one more picture...';
  }
}

export default alt.createStore(AddQuestionStore);
