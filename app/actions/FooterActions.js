import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopQuestionsSuccess',
      'getTopQuestionsFail'
    );
  }
}

export default alt.createActions(FooterActions);
