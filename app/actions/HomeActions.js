import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getQuestionsSuccess',
      'getQuestionsFail',
      'voteFail'
    );
  }

  getQuestions() {
    $.ajax({ url: '/api/questions' })
      .done((data) => {
        this.actions.getQuestionsSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getQuestionsFail(jqXhr.responseJSON.message);
      });
  }

  vote(choice, id) {
    console.log(choice === setChoice);
    var setChoice = choice.replace(/^'(.*)'$/, '$1');
    console.log(setChoice);
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { votes: setChoice++ }
    })
      .done(() => {
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.voteFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);
