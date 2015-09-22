import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getQuestionsSuccess',
      'getQuestionsFail',
      'vote1Fail',
      'vote2Fail',
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

  vote1(id, count) {
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { votes_choice_1: count + 1}
    })
      .done((req, res) => {
        console.log(req, res);
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.voteFail(jqXhr.responseJSON.message);
      });
  }

  vote2(id, count) {
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { votes_choice_2: count + 1}
    })
      .done((req, res) => {
        console.log(req, res);
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
