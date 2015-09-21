import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getQuestionsSuccess',
      'getQuestionsFail',
      'voteFail',
      'changeDisplayFail'
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
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { choice: choice++ }
    })
      .done(() => {
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.voteFail(jqXhr.responseJSON.message);
      });
  }

  changeDisplay(id, change) {
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { display: change }
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
